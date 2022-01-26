import { useState } from 'react';
import { StyledSelect, SelectItem } from './Select.style';

const Select = ({ options }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <StyledSelect
      onChange={handleChange}
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
  );
};

export default Select;
