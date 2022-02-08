import { Fade } from '@mui/material';
import { DatePicker } from './DatePicker';
import { BaseInput } from 'components/common';
import { Select } from './Select';
import { Switch } from './Switch';
import { useFormik } from 'formik';
import * as yup from 'yup';
import * as S from './ModalAddTransaction.style';
import { useDispatch } from 'react-redux';
import { createTransaction } from 'redux/transactionSlice';
import { useSelector } from 'react-redux';

const categories = [
  {
    id: 'c9d9e447-1b83-4238-8712-edc77b18b739',
    name: 'Основные расходы',
    type: 'EXPENSE',
  },
  {
    id: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
    name: 'Продукты',
    type: 'EXPENSE',
  },
  {
    id: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386',
    name: 'Машина',
    type: 'EXPENSE',
  },
  {
    id: 'bbdd58b8-e804-4ab9-bf4f-695da5ef64f4',
    name: 'Забота о себе',
    type: 'EXPENSE',
  },
  {
    id: '76cc875a-3b43-4eae-8fdb-f76633821a34',
    name: 'Забота о детях',
    type: 'EXPENSE',
  },
  {
    id: '128673b5-2f9a-46ae-a428-ec48cf1effa1',
    name: 'Товары для дома',
    type: 'EXPENSE',
  },
  {
    id: '1272fcc4-d59f-462d-ad33-a85a075e5581',
    name: 'Образование',
    type: 'EXPENSE',
  },
  {
    id: 'c143130f-7d1e-4011-90a4-54766d4e308e',
    name: 'Досуг',
    type: 'EXPENSE',
  },
  {
    id: '719626f1-9d23-4e99-84f5-289024e437a8',
    name: 'Другие расходы',
    type: 'EXPENSE',
  },
  {
    id: '3acd0ecd-5295-4d54-8e7c-d3908f4d0402',
    name: 'Развлечения',
    type: 'EXPENSE',
  },
];

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

const ModalAddTransaction = ({ open, onClose }) => {
  const { error, isLoading } = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      isExpenseMode: false,
      amount: '',
      comment: '',
      transactionDate: new Date().toISOString(),
      type: 'INCOME',
      categoryId: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const transaction = {
        amount: values.isExpenseMode ? -values.amount : values.amount,
        comment: values.comment,
        transactionDate: values.transactionDate,
        type: values.type,
        categoryId: values.categoryId,
      };
      dispatch(createTransaction(transaction));
    },
  });

  const onTypeChangeHandler = (e) => {
    const value = e.target.checked ? 'EXPENSE' : 'INCOME';
    formik.setFieldValue('isExpenseMode', e.target.checked);
    formik.setFieldValue('type', value.toString());
    formik.setFieldValue('categoryId', '');
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
              options={categories}
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
