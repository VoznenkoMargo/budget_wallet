import { Toolbar, AppBar, Button } from '@mui/material';
import { styled } from '@mui/system';
import LogoutIcon from '@mui/icons-material/Logout';

export const StyledToolbar = styled(Toolbar)(() => {
  return {
    padding: '16px 0',
    justifyContent: 'space-between',
    '@media (max-width: 1160px)': {
      padding: '16px 40px',
    },
    '@media (max-width: 600px)': {
      padding: '15px 20px',
    },
  };
});

export const Header = styled((props) => (
  <AppBar position="sticky" {...props} />
))(({ theme }) => {
  const { palette } = theme;
  return {
    boxShadow: 'none',
    backgroundColor: palette.common.white,
    '@media (max-width: 600px)': {
      zIndex: '2000',
    },
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
    svg: {
      opacity: 1,
      transition: 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out',
    },
    div: {
      transition: 'transform 0.2s ease',
      '@media (max-width: 600px)': {
        display: 'none',
      },
    },
    '&:hover': {
      svg: {
        transform: 'translateX(100%)',
        opacity: 0,
        '@media (max-width: 600px)': {
          transform: 'none',
          opacity: 1,
        },
      },
      div: {
        transform: 'translateX(-50%)',
        '@media (max-width: 600px)': {
          transform: 'none',
        },
      },
    },
    '@media (max-width: 600px)': {
      minWidth: 'auto',
      padding: '2px',
      span: {
        margin: 0,
        padding: '2px',
      },
    },
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
