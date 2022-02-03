import { Fade } from '@mui/material';
import { DatePicker } from './DatePicker';
import { BaseInput } from 'components/common';
import { useState } from 'react';
import { Select } from './Select';
import { Switch } from './Switch';
import moment from 'moment';
import * as S from './ModalAddTransaction.style';

const categories = [
  'Main',
  'Food',
  'Car',
  'Development',
  'Kids',
  'House',
  'Education',
  'Others',
];

const ModalAddTransaction = ({ open, onClose }) => {
  const [isExpenseMode, setIsExpenseMode] = useState(false);
  const [dateValue, setDateValue] = useState(moment(new Date()));
  const [amountValue, setAmountValue] = useState('');
  const [commentValue, setCommentValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const onSwitchChangeHandler = (e) => {
    setIsExpenseMode(e.target.checked);
  };
  const onCloseHandler = () => {
    onClose();
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      dateValue,
      amountValue,
      commentValue,
      categoryValue,
    });
  };

  return (
    <S.Modal open={open} onClose={onCloseHandler} closeAfterTransition>
      <Fade in={open}>
        <S.Form onSubmit={onSubmitHandler} autoComplete="off">
          <S.Title>Add transaction</S.Title>
          <S.CloseIcon onClick={onCloseHandler} />
          <Switch
            labelDefault="Income"
            labelChecked="Expenses"
            checked={isExpenseMode}
            onChange={onSwitchChangeHandler}
          />
          {isExpenseMode && (
            <Select
              value={categoryValue}
              onChange={(e) => setCategoryValue(e.target.value)}
              options={categories}
              placeholder="Select a category"
            />
          )}
          <S.InputsContainer>
            <BaseInput
              color="secondary"
              variant="standard"
              placeholder="0.00"
              type="number"
              value={amountValue}
              onChange={(e) => setAmountValue(e.target.value)}
            />
            <DatePicker
              value={dateValue}
              onChange={(newValue) => {
                setDateValue(newValue);
              }}
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
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
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
