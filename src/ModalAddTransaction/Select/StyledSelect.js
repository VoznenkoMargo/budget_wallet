import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useState } from 'react';

const selectStyles = {
  borderRadius: 0,
  border: 'none',
  width: '100%',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
    borderBottom: '1px solid #E0E0E0',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderWidth: '1px',
    borderColor: '#E0E0E0',
  },
  '&.Mui-hover': {
    borderColor: 'transparent',
  },
  '& .placeholder': {
    color: '#BDBDBD',
    fontSize: '18px',
    fontFamily: 'Abel',
  },
};

const selectListStyles = {
  sx: {
    '& .MuiMenu-paper': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(50px)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      borderRadius: '20px',
      marginTop: '5px',
    },
  },
};

const selectListItemStyles = {
  fontSize: '18px',
  lineHeight: '23px',
  paddingLeft: '20px',
  fontWeight: 400,
  fontFamily: 'Abel',
  transition: 'color 0.2s ease, background-color 0.2s ease',

  '&.Mui-selected': {
    color: '#ff6596',
    backgroundColor: 'transparent',
  },
  '&:hover': {
    color: '#ff6596',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  '&:focus': {
    backgroundColor: 'transparent',
  },
};

const StyledSelect = ({ options }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  const iconComponent = (props) => {
    return <ExpandMore className={props.className} />;
  };

  return (
    <Select
      onChange={handleChange}
      value={value}
      sx={selectStyles}
      MenuProps={selectListStyles}
      displayEmpty
      IconComponent={iconComponent}
      inputProps={{ 'aria-label': 'Without label' }}
      renderValue={(selected) => {
        if (selected.trim() === '') {
          return <p className="placeholder">Select a category</p>;
        }
        return selected;
      }}
    >
      {options.map((option) => {
        return (
          <MenuItem value={option} key={option} sx={selectListItemStyles}>
            {option}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default StyledSelect;
