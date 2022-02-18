import { Fade } from '@mui/material';
import { DatePicker } from './DatePicker';
import { BaseInput } from 'components/common';
import { Select } from './Select';
import { Switch } from './Switch';
import { useFormik } from 'formik';
import * as yup from 'yup';
import * as S from './ModalAddTransaction.style';
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction } from 'redux/transactionSlice';
import moment from 'moment';
import { addTransactionToStatistics } from 'redux/statisticsSlice';
import { updateBalance } from 'redux/userSlice';
import { TRANSACTION_TYPES } from 'constants/transactionTypes';
import { useEffect } from 'react';

const fitsStatisticsFilter = (date, month, year) => {
  if (!month && !year) {
    return true;
  }

  const transactionYear = new Date(date).getFullYear();
  const transactionMonth = new Date(date).getMonth() + 1;
  return month
    ? transactionYear === year && transactionMonth === month
    : transactionYear === year;
};

const validationSchema = yup.object({
  isExpenseMode: yup.boolean(),
  amount: yup
    .number()
    .positive('Amount should be positive')
    .required("Amount can't be empty"),
  categoryId: yup.string().when('isExpenseMode', {
    is: true,
    then: yup.string().required('Please choose a category'),
  }),
});

const getCategoriesByType = (categories, type) => {
  return categories.filter((category) => category.type === type);
};

const transactionTypes = {
  EXPENSE: 'EXPENSE',
  INCOME: 'INCOME',
};

const ModalAddTransaction = ({ open, onClose, categories }) => {
  const statistics = useSelector((state) => state.statistics.statistics);
  const allCategories = useSelector((state) => state.categories.categories);
  const { error } = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  const expenseCategories = getCategoriesByType(
    categories,
    transactionTypes.EXPENSE
  );
  const [incomeCategory] = getCategoriesByType(
    categories,
    transactionTypes.INCOME
  );

  useEffect(() => {
    console.log('ERROR from effect', error);
  }, [error]);

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      isExpenseMode: false,
      amount: '',
      comment: '',
      transactionDate: new Date(),
      type: TRANSACTION_TYPES.INCOME,
      categoryId: incomeCategory.id,
    },
    onSubmit: async (values) => {
      const transactionDate = moment(values.transactionDate).format(
        'YYYY-MM-DD'
      );
      const amount = values.isExpenseMode ? -values.amount : values.amount;
      const type = values.isExpenseMode
        ? TRANSACTION_TYPES.EXPENSE
        : TRANSACTION_TYPES.INCOME;
      const categoryId = values.categoryId;
      const comment = values.comment;

      const transaction = {
        transactionDate,
        amount,
        type,
        categoryId,
        comment,
      };

      console.log(transaction);

      const createAction = await dispatch(createTransaction(transaction));
      if (!createAction.error) {
        if (
          statistics &&
          fitsStatisticsFilter(
            transactionDate,
            statistics.month,
            statistics.year
          )
        ) {
          const categoryName = allCategories.find(
            (category) => category.id === transaction.categoryId
          ).name;
          dispatch(addTransactionToStatistics({ transaction, categoryName }));
        }
        dispatch(updateBalance(transaction.amount));
        onCloseHandler();
      }
    },
  });

  const onTypeChangeHandler = (e) => {
    const categoryId = e.target.checked ? '' : incomeCategory.id;
    formik.setFieldValue('isExpenseMode', e.target.checked);
    formik.setFieldValue('categoryId', categoryId);
  };

  const onDateChangeHandler = (date) => {
    formik.setFieldValue('transactionDate', date);
  };

  const onCloseHandler = () => {
    onClose();
    formik.resetForm();
  };

  return (
    <S.Modal open={open} onClose={onCloseHandler} closeAfterTransition>
      <Fade in={open}>
        <S.Form onSubmit={formik.handleSubmit} autoComplete="off">
          <S.Title>Add transaction</S.Title>
          <S.CloseIcon onClick={onCloseHandler} />
          <Switch
            labelDefault="Income"
            labelChecked="Expenses"
            checked={formik.values.isExpenseMode}
            onChange={onTypeChangeHandler}
          />
          {formik.values.isExpenseMode && (
            <Select
              name="categoryId"
              value={formik.values.categoryId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              options={expenseCategories}
              placeholder="Select a category"
              error={
                formik.touched.categoryId && Boolean(formik.errors.categoryId)
              }
              helperText={formik.touched.categoryId && formik.errors.categoryId}
            />
          )}
          <S.InputsContainer>
            <BaseInput
              color="secondary"
              variant="standard"
              placeholder="0.00"
              type="number"
              name="amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.amount && Boolean(formik.errors.amount)}
              helperText={formik.touched.amount && formik.errors.amount}
            />
            <DatePicker
              value={formik.values.transactionDate}
              onChange={onDateChangeHandler}
            />
          </S.InputsContainer>
          <BaseInput
            sx={{
              '& .MuiInput-input': {
                textAlign: 'left',
                padding: '10px 20px 10px 20px',
              },
            }}
            color="secondary"
            variant="standard"
            placeholder="Comments"
            type="text"
            name="comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
          />
          <S.ButtonsContainer>
            <S.FilledButton type="submit">Add</S.FilledButton>
            <S.OutlinedButton onClick={onCloseHandler}>Cancel</S.OutlinedButton>
          </S.ButtonsContainer>
        </S.Form>
      </Fade>
    </S.Modal>
  );
};

export default ModalAddTransaction;
