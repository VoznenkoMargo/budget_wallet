import { FormControl } from '@mui/material';
// import { useState } from 'react';
import { StyledSelect, SelectItem } from './Select.style';

const Select = ({ options, value, onChange }) => {
  // const [value, setValue] = useState('');

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  //   console.log(event.target.value);
  // };

  return (
    <FormControl variant="standard" sx={{ width: '100%' }} color="secondary">
      <StyledSelect
        onChange={onChange}
        value={value}
        renderValue={(selected) => {
          if (selected.trim() === '') {
            return <p className="placeholder">Select a category</p>;
          }
          return selected;
        }}
      >
        {options.map((option) => {
          return (
            <SelectItem value={option} key={option}>
              {option}
            </SelectItem>
          );
        })}
      </StyledSelect>
    </FormControl>
  );
};

export default Select;
