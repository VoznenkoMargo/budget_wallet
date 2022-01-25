import { useState } from 'react';
import ReactDOM from 'react-dom';
import classes from './ModalAddTransaction.module.css';
import { Close } from '@mui/icons-material';
import { Switch } from './Switch';
import AmountInput from './AmountInput/AmountInput';
import { Backdrop, Box, TextField, Button } from '@mui/material';
import StyledSelect from './Select/StyledSelect';

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

const ModalOverlay = () => {
  const [isExpenseMode, setIsExpenseMode] = useState(false);
  const onSwitchChangeHandler = (e) => {
    setIsExpenseMode(e.target.checked);
  };

  return (
    <div className={classes.modal}>
      <h2 className={classes.title}>Add transaction</h2>
      <Close className={classes['close-icon']} />
      <Switch
        labelDefault="Income"
        labelChecked="Expenses"
        checked={isExpenseMode}
        onChange={onSwitchChangeHandler}
      />
      <StyledSelect options={categories} />
      <Box
        sx={{
          display: 'flex',
          columnGap: '30px',
        }}
      >
        <AmountInput variant="standard" placeholder="0.00" type="number" />
        <AmountInput variant="standard" placeholder="0.00" type="number" />
      </Box>
      <TextField
        sx={{
          width: '100%',
          '& .MuiInput-input': { padding: '10px 20px 10px 20px' },
        }}
        variant="standard"
        placeholder="Comments"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '20px',
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: '300px',
            backgroundColor: '#24cca7',
            borderRadius: '20px',
            fontSize: '18px',
            padding: '13px 0',
            fontWeight: 400,
            fontFamily: 'inherit',
            '&:hover': {
              backgroundColor: 'rgba(36, 204, 167, 0.5)',
            },
          }}
          disableElevation
        >
          Add
        </Button>
        <Button
          variant="outlined"
          sx={{
            width: '300px',
            borderRadius: '20px',
            fontSize: '18px',
            fontWeight: 400,
            padding: '12px 0',
            border: '1px solid #4A56E2',
            color: '#4A56E2',
          }}
          disableElevation
        >
          Cancel
        </Button>
      </Box>
    </div>
  );
};

const ModalAddTransaction = () => {
  const backdropRoot = document.getElementById('modal-root');

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop
          open={true}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
          }}
        >
          <ModalOverlay />
        </Backdrop>,
        backdropRoot
      )}
    </>
  );
};

export default ModalAddTransaction;
