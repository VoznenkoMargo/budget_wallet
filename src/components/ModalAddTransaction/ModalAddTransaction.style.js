import { Close } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const Form = styled('form')(({ theme }) => {
  const { palette, breakpoints } = theme;
  return {
    padding: '60px',
    paddingTop: '40px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '540px',
    backgroundColor: palette.common.white,
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '40px',
    alignItems: 'center',
    outline: 'none',
    [breakpoints.down('tablet')]: {
      width: '100%',
      height: '100%',
      borderRadius: 0,
      justifyContent: 'center',
      padding: '10px',
    },
  };
});

export const Title = styled(Typography)(({ theme }) => {
  const { typography } = theme;
  return {
    fontFamily: typography.fontFamily.primary,
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
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'rotate(90deg)',
    },
  };
});

export const ButtonsContainer = styled('div')(({ theme }) => {
  const { breakpoints } = theme;
  return {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
    [breakpoints.down('tablet')]: {
      width: '100%',
      alignItems: 'center',
    },
  };
});

export const InputsContainer = styled('div')(({ theme }) => {
  const { breakpoints } = theme;
  return {
    display: 'flex',
    columnGap: '30px',
    width: '100%',
    [breakpoints.down('mobile')]: {
      flexDirection: 'column',
      rowGap: '40px',
    },
  };
});
