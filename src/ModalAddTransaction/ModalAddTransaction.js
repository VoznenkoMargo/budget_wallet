import { useState } from 'react';
import { Close } from '@mui/icons-material';
import { Switch } from './Switch';
import AmountInput from './AmountInput/AmountInput';
import { Box, TextField, Button, Modal, Typography, Fade } from '@mui/material';
import { styled } from '@mui/system';
import Select from './Select/Select';

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

const StyledBox = styled('div')(({ theme }) => {
  return {
    padding: '60px',
    paddingTop: '40px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '540px',
    zIndex: '100',
    backgroundColor: theme.palette.common.white,
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '40px',
    alignItems: 'center',
    //How media queries are written
    '@media (max-width:780px)': {
      width: '100%',
      height: '100%',
      borderRadius: 0,
    },
  };
});

const ModalAddTransaction = ({ open, onClose }) => {
  const [isExpenseMode, setIsExpenseMode] = useState(false);
  const onSwitchChangeHandler = (e) => {
    setIsExpenseMode(e.target.checked);
  };
  const onCloseHandler = () => {
    onClose();
  };

  return (
    <Modal
      open={open}
      closeAfterTransition
      onClose={onCloseHandler}
      sx={{
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(0,0,0, 0.25)',
        },
      }}
    >
      <Fade in={open}>
        <StyledBox>
          <Typography
            sx={{
              fontFamily: 'fontFamily.primary',
              fontSize: '30px',
              lineHeight: '45px',
            }}
          >
            Add transaction
          </Typography>
          <Close
            sx={{
              position: 'absolute',
              right: '20px',
              top: '20px',
              cursor: 'pointer',
            }}
            onClick={onCloseHandler}
          />
          <Switch
            labelDefault="Income"
            labelChecked="Expenses"
            checked={isExpenseMode}
            onChange={onSwitchChangeHandler}
          />
          {isExpenseMode && <Select options={categories} />}
          <Box
            sx={{
              display: 'flex',
              columnGap: '30px',
              width: '100%',
            }}
          >
            <AmountInput
              color="secondary"
              variant="standard"
              placeholder="0.00"
              type="number"
            />
            <AmountInput
              color="secondary"
              variant="standard"
              placeholder="0.00"
              type="number"
            />
          </Box>
          <TextField
            color="secondary"
            sx={{
              width: '100%',
              '& .MuiInput-input': {
                padding: '10px 20px 10px 20px',
                fontSize: '18px',
                fontFamily: 'inherit',
              },
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
                backgroundColor: 'primary.main',
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
              color="secondary"
              sx={{
                width: '300px',
                borderRadius: '20px',
                fontSize: '18px',
                fontWeight: 400,
                padding: '12px 0',
                border: '1px solid',
                borderColor: 'secondary.main',
                color: 'secondary.main',
              }}
              disableElevation
              onClick={onCloseHandler}
            >
              Cancel
            </Button>
          </Box>
        </StyledBox>
      </Fade>
    </Modal>
  );
};

export default ModalAddTransaction;
