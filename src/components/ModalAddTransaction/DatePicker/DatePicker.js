import { DateInput } from './DatePicker.style';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterMoment';
import { DatePicker as MuiDatePicker } from '@mui/lab';
import moment from 'moment';

const DatePicker = ({ value, onChange }) => {
  const maxDate = moment();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        value={moment(new Date(value)).format()}
        onChange={onChange}
        inputFormat="DD.MM.YYYY"
        mask={'__.__.____'}
        maxDate={maxDate}
        renderInput={(params) => {
          return <DateInput {...params} />;
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
