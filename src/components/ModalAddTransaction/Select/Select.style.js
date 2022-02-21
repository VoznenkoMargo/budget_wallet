import { Select, MenuItem } from '@mui/material';
import { styled, alpha } from '@mui/system';
import { ExpandMore } from '@mui/icons-material';

const selectMenuProps = {
  '& .MuiMenu-paper': {
    backgroundColor: (theme) => alpha(theme.palette.common.white, 0.5),
    backdropFilter: 'blur(50px)',
    boxShadow: (theme) =>
      `0px 6px 15px ${alpha(theme.palette.common.black, 0.1)}`,
    borderRadius: '20px',
    marginTop: '5px',
    '@media (max-width: 600px)': {
      left: '50% !important',
      transform: 'translate(-50%) !important',
    },
    maxHeight: '350px',
    '::-webkit-scrollbar-track': {
      marginTop: '20px',
      marginBottom: '20px',
    },
    '::-webkit-scrollbar': {
      width: '4px',
      height: '10px',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#c2c2c2',
      borderRadius: '10px',
    },
  },
  disableScrollLock: true,
};

const Icon = (props) => {
  return <ExpandMore className={props.className} />;
};

export const StyledSelect = styled((props) => (
  <Select
    MenuProps={{ sx: selectMenuProps }}
    displayEmpty
    IconComponent={Icon}
    {...props}
  />
))(({ theme }) => {
  const { palette } = theme;

  return {
    borderRadius: 0,
    border: 'none',
    width: '100%',
    fontSize: '18px',
    '& .MuiSelect-select': {
      padding: '10px 20px 10px 20px',
      lineHeight: '23px',
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
    '&.MuiInput-underline:before': {
      borderBottom: `2px solid ${palette.grey[100]}`,
    },
    '&&.MuiInput-underline:hover:before': {
      borderBottom: `2px solid ${palette.secondary.light}`,
    },
    '& .placeholder': {
      color: palette.grey[200],
      fontSize: '18px',
      fontFamily: 'Abel',
    },
    '& .MuiSelect-icon': {
      transition: 'transform 0.2s ease',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '30px',
      borderColor: palette.common.black,
    },
  };
});

export const SelectItem = styled((props) => <MenuItem {...props} />)(
  ({ theme }) => {
    const { palette, breakpoints } = theme;

    return {
      fontSize: '18px',
      lineHeight: '23px',
      padding: '10px 20px',
      transition: 'color 0.2s ease, background-color 0.2s ease',
      '&.Mui-selected': {
        color: palette.tertiary.main,
        backgroundColor: 'transparent',
      },
      '&:hover': {
        color: palette.tertiary.main,
        backgroundColor: palette.common.white,
      },
      '&:hover.Mui-selected': {
        backgroundColor: 'transparent',
      },
      '&:focus': {
        backgroundColor: 'transparent',
      },
      [breakpoints.up('mobile')]: {
        minHeight: 'auto',
      },
    };
  }
);
