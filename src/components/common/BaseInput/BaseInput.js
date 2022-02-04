import { styled } from '@mui/system';
import { TextField } from '@mui/material';

const BaseInput = styled(TextField)(({ theme }) => {
  const { palette } = theme;
  return {
    width: '100%',
    '& .MuiInput-input': {
      textAlign: 'center',
      paddingBottom: '10px',
      fontFamily: 'inherit',
      fontSize: '18px',
      lineHeight: '22.94px',
      '&::placeholder': {
        color: palette.grey[200],
        opacity: 1,
      },
    },
    '.MuiInput-underline:before': {
      borderBottom: `2px solid ${palette.grey[100]}`,
    },
    '&& .MuiInput-underline:hover:before': {
      borderBottom: `2px solid ${palette.secondary.light}`,
    },
    '& .MuiFormHelperText-root': {
      fontSize: '14px',
    },
  };
});

export default BaseInput;
