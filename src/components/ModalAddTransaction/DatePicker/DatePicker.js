import { StyledDatePicker } from './DatePicker.style';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterMoment';
import moment from 'moment';

const DatePicker = ({ value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledDatePicker
        value={moment(new Date(value)).format()}
        onChange={onChange}
        inputFormat="DD.MM.YYYY"
        mask={'__.__.____'}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
