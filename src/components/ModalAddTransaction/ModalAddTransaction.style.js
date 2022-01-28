import { Close } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { styled, alpha } from '@mui/system';

export const FilledButton = styled((props) => (
  <Button variant="contained" disableElevation {...props} />
))(({ theme }) => {
  const { palette } = theme;
  return {
    width: '300px',
    backgroundColor: palette.primary.main,
    borderRadius: '20px',
    fontSize: '18px',
    padding: '13px 0',
    fontWeight: 400,
    fontFamily: 'inherit',
    '&:hover': {
      backgroundColor: alpha(palette.primary.main, 0.5),
    },
  };
});

export const OutlinedButton = styled((props) => (
  <Button variant="outlined" color="secondary" disableElevation {...props} />
))(({ theme }) => {
  const { palette } = theme;
  return {
    width: '300px',
    borderRadius: '20px',
    fontSize: '18px',
    fontFamily: 'inherit',
    fontWeight: 400,
    padding: '12px 0',
    border: '1px solid',
    borderColor: palette.secondary.main,
    color: palette.secondary.main,
  };
});

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
    zIndex: '100',
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
