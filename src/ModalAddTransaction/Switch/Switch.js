import { Box } from '@mui/system';
import { Label, SwitchButton } from './Switch.style';

const Switch = ({ labelDefault, labelChecked, onChange, checked }) => {
  const defaultLabelClasses = `${'label-default'} ${!checked ? 'active' : ''}`;
  const checkedLabelClasses = `${'label-checked'} ${checked ? 'active' : ''}`;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '24px' }}>
      <Label className={defaultLabelClasses}>{labelDefault}</Label>
      <SwitchButton checked={checked} onChange={onChange} />
      <Label className={checkedLabelClasses}>{labelChecked}</Label>
    </Box>
  );
};

export default Switch;
