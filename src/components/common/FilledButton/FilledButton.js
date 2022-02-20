import { Button } from '@mui/material';
import { styled, alpha } from '@mui/system';

const FilledButton = styled((props) => (
  <Button variant="contained" disableElevation {...props} />
))(({ theme }) => {
  const { palette, breakpoints } = theme;
  return {
    width: '300px',
    backgroundColor: palette.primary.main,
    borderRadius: '20px',
    fontSize: '18px',
    lineHeight: '23px',
    padding: '13px 0',
    fontWeight: 400,
    fontFamily: 'inherit',
    letterSpacing: '0.1em',
    '&:hover': {
      backgroundColor: alpha(palette.primary.main, 0.5),
    },
    [breakpoints.down('mobile')]: {
      width: '100%',
    },
  };
});

export default FilledButton;
