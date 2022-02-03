import { Fade } from '@mui/material';
import { DatePicker } from './DatePicker';
import { BaseInput } from 'components/common';
import { useState } from 'react';
import { Select } from './Select';
import { Switch } from './Switch';
import { useFormik } from 'formik';
import * as yup from 'yup';
import * as S from './ModalAddTransaction.style';

const categories = [
  { id: 0, name: 'Main' },
  { id: 1, name: 'Food' },
  { id: 2, name: 'Car' },
  { id: 3, name: 'Development' },
  { id: 4, name: 'Kids' },
  { id: 5, name: 'House' },
  { id: 6, name: 'Education' },
  { id: 7, name: 'Others' },
];

const validationSchema = yup.object({
  amount: yup
    .number()
    .positive('Amount should be positive')
    .required("Amount can't be empty"),
  // categoryId: yup.string().required('Please choose a category'),
});

const ModalAddTransaction = ({ open, onClose }) => {
  const [isExpenseMode, setIsExpenseMode] = useState(false);
  const formik = useFormik({
    initialValues: {
      amount: '',
      comment: '',
      transactionDate: new Date(),
      type: 'INCOME',
      categoryId: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const onTypeChangeHandler = (e) => {
    const value = e.target.checked ? 'EXPENSE' : 'INCOME';
    formik.setFieldValue('type', value.toString());
    formik.setFieldValue('categoryId', '');
    setIsExpenseMode(e.target.checked);
  };

  const onDateChangeHandler = (date) => {
    formik.setFieldValue('transactionDate', date.toString());
  };

  const onCloseHandler = () => {
    onClose();
    formik.resetForm();
    setIsExpenseMode(false);
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
            checked={isExpenseMode}
            onChange={onTypeChangeHandler}
          />
          {isExpenseMode && (
            <Select
              name="categoryId"
              value={formik.values.categoryId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              options={categories}
              placeholder="Select a category"
              error={
                isExpenseMode &&
                formik.touched.categoryId &&
                Boolean(formik.errors.categoryId)
              }
              helperText={
                isExpenseMode &&
                formik.touched.categoryId &&
                formik.errors.categoryId
              }
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
