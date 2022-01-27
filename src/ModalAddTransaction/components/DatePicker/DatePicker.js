import { StyledDatePicker } from './DatePicker.style';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterMoment';

const DatePicker = ({ value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledDatePicker value={value} onChange={onChange} />
    </LocalizationProvider>
  );
};

export default DatePicker;
