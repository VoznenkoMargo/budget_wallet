import { useTheme, alpha } from '@mui/system';
import { Box, Modal, Fade } from '@mui/material';
import { DatePicker } from './DatePicker';
import { BaseInput } from 'components/common';
import { useState } from 'react';
import { Select } from './Select';
import { Switch } from './Switch';
import moment from 'moment';
import {
  FilledButton,
  Form,
  OutlinedButton,
  Title,
  CloseIcon,
} from './ModalAddTransaction.style';

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
  const { breakpoints, palette } = useTheme();
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
    <Modal
      open={open}
      closeAfterTransition
      onClose={onCloseHandler}
      sx={{
        '& .MuiBackdrop-root': {
          backgroundColor: alpha(palette.common.black, 0.25),
        },
      }}
    >
      <Fade in={open}>
        <Form onSubmit={onSubmitHandler} autoComplete="off">
          <Title>Add transaction</Title>
          <CloseIcon onClick={onCloseHandler} />
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
          <Box
            sx={{
              display: 'flex',
              columnGap: '30px',
              width: '100%',
              [breakpoints.down('mobile')]: {
                flexDirection: 'column',
                rowGap: '40px',
              },
            }}
          >
            <BaseInput
              color={'secondary'}
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
          </Box>
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '20px',
              [breakpoints.down('tablet')]: {
                width: '100%',
                alignItems: 'center',
              },
            }}
          >
            <FilledButton type="submit">Add</FilledButton>
            <OutlinedButton onClick={onCloseHandler}>Cancel</OutlinedButton>
          </Box>
        </Form>
      </Fade>
    </Modal>
  );
};

export default ModalAddTransaction;
