import { styled } from '@mui/system';
import { TextField } from '@mui/material';

const AmountInput = styled(TextField)(() => {
  return {
    '& .MuiInput-input': {
      textAlign: 'center',
      paddingBottom: '10px',
      fontFamily: 'inherit',
      fontSize: '18px',
      lineHeight: '22.94px',
      '&::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
      '&::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
    },
  };
});

export default AmountInput;
