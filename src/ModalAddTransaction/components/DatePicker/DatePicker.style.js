import { DatePicker } from '@mui/lab';
import { styled } from '@mui/system';
import BaseInput from '../BaseInput/BaseInput';

export const StyledDatePicker = styled((props) => (
  <DatePicker
    renderInput={(params) => (
      <BaseInput
        color="secondary"
        sx={{
          '& .MuiIconButton-root': {
            mr: '13px',
          },
          '& .MuiSvgIcon-root': {
            color: 'secondary.main',
          },
        }}
        variant="standard"
        {...params}
      />
    )}
    {...props}
  />
))(({ theme }) => {});
