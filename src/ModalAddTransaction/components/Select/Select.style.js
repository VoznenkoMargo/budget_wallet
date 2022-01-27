import { Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { ExpandMore } from '@mui/icons-material';

const selectMenuProps = {
  '& .MuiMenu-paper': {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(50px)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
    marginTop: '5px',
  },
};

const Icon = (props) => {
  return <ExpandMore className={props.className} />;
};

export const StyledSelect = styled((props) => (
  <Select
    MenuProps={{ sx: selectMenuProps }}
    inputProps={{ 'aria-label': 'Without label' }}
    displayEmpty
    IconComponent={Icon}
    {...props}
  />
))(({ theme }) => {
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
      borderBottom: `2px solid ${theme.palette.grey[100]}`,
    },
    '&&.MuiInput-underline:hover:before': {
      borderBottom: `2px solid ${theme.palette.secondary.light}`,
    },
    '& .placeholder': {
      color: '#BDBDBD',
      fontSize: '18px',
      fontFamily: 'Abel',
    },
  };
});

export const SelectItem = styled((props) => <MenuItem {...props} />)(
  ({ theme }) => {
    return {
      fontSize: '18px',
      lineHeight: '23px',
      padding: '10px 20px',
      transition: 'color 0.2s ease, background-color 0.2s ease',
      '&.Mui-selected': {
        color: theme.palette.tertiary.main,
        backgroundColor: 'transparent',
      },
      '&:hover': {
        color: theme.palette.tertiary.main,
        backgroundColor: theme.palette.common.white,
      },
      '&:hover.Mui-selected': {
        backgroundColor: 'transparent',
      },
      '&:focus': {
        backgroundColor: 'transparent',
      },
    };
  }
);
