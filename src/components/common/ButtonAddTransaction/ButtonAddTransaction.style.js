import { Fab } from '@mui/material';
import { alpha, styled } from '@mui/system';

export const StyledFab = styled((props) => <Fab color="primary" {...props} />)(
  ({ theme }) => {
    const { palette } = theme;
    return {
      position: 'absolute',
      bottom: '40px',
      right: '0',
      width: '44px',
      height: '44px',
      boxShadow: `0px 6px 15px ${alpha(palette.primary.main, 0.5)}`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8, <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0V20" stroke="white" stroke-width="2"/><path d="M0 10L20 10" stroke="white" stroke-width="2"/></svg>')`,
      '&:hover': {
        backgroundColor: alpha(palette.primary.main, 0.7),
      },
      '&:active': {
        boxShadow: `0px 6px 15px ${alpha(palette.common.black, 0.2)}`,
        transform: 'translateY(2px)',
        transition: 'transform 0.2s ease',
      },
      '@media (max-width: 1160px)': {
        right: '40px',
      },
    };
  }
);
