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

const ModalAddTransaction = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const expenseCategories = getCategoriesByType(categories, 'EXPENSE');
  const incomeCategory = getCategoriesByType(categories, 'INCOME');

  const formik = useFormik({
    initialValues: {
      isExpenseMode: false,
      amount: '',
      comment: '',
      transactionDate: new Date().toISOString(),
      type: 'INCOME',
      categoryId: incomeCategory[0].id,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const transaction = {
        amount: values.isExpenseMode ? -values.amount : values.amount,
        comment: values.comment,
        transactionDate: moment(values.transactionDate).format('YYYY-MM-DD'),
        type: values.type,
        categoryId: values.categoryId,
      };
      console.log(transaction);
      dispatch(createTransaction(transaction));
    },
  });

  const onTypeChangeHandler = (e) => {
    const value = e.target.checked ? 'EXPENSE' : 'INCOME';
    const categoryId = e.target.checked ? '' : incomeCategory[0].id;
    formik.setFieldValue('isExpenseMode', e.target.checked);
    formik.setFieldValue('type', value.toString());
    formik.setFieldValue('categoryId', categoryId);
  };

  const onDateChangeHandler = (date) => {
    formik.setFieldValue('transactionDate', date.toISOString());
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
