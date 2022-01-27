import { styled } from '@mui/system';
import { TextField } from '@mui/material';

const BaseInput = styled((props) => <TextField {...props} />)(({ theme }) => {
  return {
    width: '100%',
    '& .MuiInput-input': {
      textAlign: 'center',
      paddingBottom: '10px',
      fontFamily: 'inherit',
      fontSize: '18px',
      lineHeight: '22.94px',
    },
    '.MuiInput-underline:before': {
      borderBottom: `2px solid ${theme.palette.grey[100]}`,
    },
    '&& .MuiInput-underline:hover:before': {
      borderBottom: `2px solid ${theme.palette.secondary.light}`,
    },
  };
});

export default BaseInput;
