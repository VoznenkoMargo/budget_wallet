import { Box } from '@mui/system';
import { Label, SwitchButton } from './Switch.style';

const Switch = ({ labelDefault, labelChecked, onChange, checked }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '24px' }}>
      <Label checked={checked} className="label-default">
        {labelDefault}
      </Label>
      <SwitchButton checked={checked} onChange={onChange} />
      <Label checked={checked} className="label-checked">
        {labelChecked}
      </Label>
    </Box>
  );
};

export default Switch;
