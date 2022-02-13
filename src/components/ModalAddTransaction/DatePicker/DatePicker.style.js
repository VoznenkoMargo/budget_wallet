import { styled } from '@mui/system';
import { BaseInput } from 'components/common/BaseInput';

export const DateInput = styled((props) => (
  <BaseInput variant="standard" color="secondary" {...props} />
))(({ theme }) => {
  const { palette } = theme;
  return {
    '& .MuiIconButton-root': {
      marginRight: '13px',
    },
    '& .MuiSvgIcon-root': {
      color: palette.secondary.main,
    },
  };
});
