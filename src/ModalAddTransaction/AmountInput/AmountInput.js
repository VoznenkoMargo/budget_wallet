import { styled } from '@mui/system';
import { TextField } from '@mui/material';

const AmountInput = styled(TextField)(() => {
  return {
    width: '100%',
    '& .MuiInput-input': {
      textAlign: 'center',
      paddingBottom: '10px',
      fontFamily: 'inherit',
      fontSize: '18px',
      lineHeight: '22.94px',
    },
    '& .MuiInput-root::before': {
      borderColor: 'transparent',
      border: 'none',
    },
    '& .MuiInput-root:hover::before': {
      border: 'none',
    },
    '& .MuiInput-root.Mui-focused::after': {
      borderBottom: 'none',
    },
    '& .MuiInput-root::after': {
      borderColor: 'transparent',
    },
  };
});

export default AmountInput;
