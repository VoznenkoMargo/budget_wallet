import { Close } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { alpha } from '@mui/system';

export const FilledButton = styled((props) => (
  <Button variant="contained" disableElevation {...props} />
))(({ theme }) => {
  return {
    width: '300px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '20px',
    fontSize: '18px',
    padding: '13px 0',
    fontWeight: 400,
    fontFamily: 'inherit',
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.5),
    },
  };
});

export const OutlinedButton = styled((props) => (
  <Button variant="outlined" color="secondary" disableElevation {...props} />
))(({ theme }) => {
  return {
    width: '300px',
    borderRadius: '20px',
    fontSize: '18px',
    fontFamily: 'inherit',
    fontWeight: 400,
    padding: '12px 0',
    border: '1px solid',
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
  };
});

export const Form = styled('form')(({ theme }) => {
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
    '@media (max-width:600px)': {
      width: '100%',
      height: '100%',
      borderRadius: 0,
      justifyContent: 'center',
      padding: '10px',
    },
  };
});

export const Title = styled(Typography)(({ theme }) => {
  return {
    fontFamily: theme.typography.fontFamily.primary,
    fontSize: '30px',
    lineHeight: '45px',
  };
});

export const CloseIcon = styled(Close)(() => {
  return {
    position: 'absolute',
    right: '20px',
    top: '20px',
    cursor: 'pointer',
  };
});
