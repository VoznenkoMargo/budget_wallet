import { BaseInput } from 'components/common';
import { useField } from 'formik';

const CustomInput = (props) => {
  const [field, meta] = useField(props);
  const { type, placeholder, InputProps } = props;

  return (
    <>
      <BaseInput
        {...field}
        type={type}
        placeholder={placeholder}
        variant="standard"
        sx={{
          '& .MuiInput-input': {
            textAlign: 'left',
            fontFamily: 'Abel',
          },
        }}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
        InputProps={InputProps}
      />
    </>
  );
};
export default CustomInput;
