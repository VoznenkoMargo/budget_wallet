import { FormControl, FormHelperText } from '@mui/material';
import { StyledSelect, SelectItem } from './Select.style';

const Select = ({
  options,
  value,
  onChange,
  variant = 'standard',
  placeholder,
  name,
  error,
  helperText,
  onBlur,
}) => {
  return (
    <FormControl
      error={error}
      variant={variant}
      sx={{
        width: '100%',
        '& .MuiFormHelperText-root': {
          fontSize: '14px',
        },
      }}
      color="secondary"
    >
      <StyledSelect
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        renderValue={(selected) => {
          if (selected.trim() === '') {
            return <p className="placeholder">{placeholder}</p>;
          }
          return options.find((option) => option.id === selected).name;
        }}
      >
        {options.map((option) => {
          return (
            <SelectItem value={option.id} key={option.id}>
              {option.name}
            </SelectItem>
          );
        })}
      </StyledSelect>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
