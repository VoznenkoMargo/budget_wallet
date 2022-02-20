import { Button } from '@mui/material';
import { styled } from '@mui/system';

const OutlinedButton = styled((props) => (
  <Button variant="outlined" color="secondary" disableElevation {...props} />
))(({ theme }) => {
  const { palette, breakpoints } = theme;
  return {
    width: '300px',
    borderRadius: '20px',
    fontSize: '18px',
    fontFamily: 'inherit',
    lineHeight: '23px',
    fontWeight: 400,
    padding: '12px 0',
    border: '1px solid',
    letterSpacing: '0.1em',
    borderColor: palette.secondary.main,
    color: palette.secondary.main,
    [breakpoints.down('mobile')]: {
      width: '100%',
    },
  };
});

export default OutlinedButton;
