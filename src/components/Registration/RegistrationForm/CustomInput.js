import { TextField } from '@mui/material';
import { useField } from 'formik';
import s from './RegistrationForm.module.css';

const CustomInput = (props) => {
  const [field, meta] = useField(props);
  const { type, placeholder, InputProps } = props;
  const isError = meta.touched && meta.error;
  return (
    <>
      <TextField
        {...field}
        type={type}
        placeholder={placeholder}
        className={s.input}
        variant="standard"
        fullWidth
        color={isError ? 'error' : 'primary'}
        sx={{
          mt: '35px',
          '.MuiInput-underline:before': {
            borderColor: '#E0E0E0',
          },
        }}
        InputProps={InputProps}
      />
      <span className={s.error}>{isError ? meta.error : ''}</span>
    </>
  );
};
export default CustomInput;
