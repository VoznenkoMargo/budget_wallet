import { Toolbar, AppBar, Button } from '@mui/material';
import { styled } from '@mui/system';
import LogoutIcon from '@mui/icons-material/Logout';

export const StyledToolbar = styled(Toolbar)(({ theme }) => {
  return {
    padding: '16px 0',
    justifyContent: 'space-between',
  };
});

export const Header = styled((props) => (
  <AppBar position="static" {...props} />
))(({ theme }) => {
  const { palette } = theme;
  return {
    boxShadow: 'none',
    backgroundColor: palette.common.white,
  };
});

export const ExitButton = styled((props) => (
  <Button startIcon={<LogoutIcon />} {...props} />
))(({ theme }) => {
  const { palette } = theme;
  return {
    textTransform: 'capitalize',
    fontFamily: 'inherit',
    color: palette.grey[200],
    fontSize: '18px',
    padding: '3px 15px',
  };
});

export const UserName = styled('span')(({ theme }) => {
  const { palette } = theme;
  return {
    color: palette.grey[200],
    fontSize: '18px',
  };
});

export const LogoName = styled('h6')(({ theme }) => {
  const { palette, typography } = theme;
  return {
    color: palette.common.black,
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeightBold,
    fontSize: '30px',
  };
});
