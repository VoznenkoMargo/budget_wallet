import { styled } from '@mui/system';

export const SwitchButton = styled((props) => (
  <input type="checkbox" {...props} />
))(({ theme }) => {
  return {
    position: 'relative',
    appearance: 'none',
    width: '80px',
    height: '40px',
    backgroundColor: theme.palette.common.white,
    borderRadius: '5rem',
    border: '1px solid #e0e0e0',
    cursor: 'pointer',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '44px',
      height: '44px',
      backgroundColor: theme.palette.primary.main,
      boxShadow: '0px 6px 15px rgba(36, 204, 167, 0.5)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8, <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0V20" stroke="white" stroke-width="2"/><path d="M0 10L20 10" stroke="white" stroke-width="2"/></svg>')`,
      top: '50%',
      left: '-5px',
      transform: 'translateY(-50%)',
      borderRadius: '50%',
      zIndex: '10',
      transition: 'all 0.2s ease',
    },
    '&:checked::before': {
      left: '50%',
      backgroundColor: theme.palette.tertiary.main,
      boxShadow: '0px 6px 15px rgba(255, 101, 150, 0.5)',
      backgroundImage: `url('data:image/svg+xml;utf8, <svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1L20 0.999999" stroke="white" stroke-width="2"/></svg>')`,
    },
  };
});

export const Label = styled((props) => <p {...props} />)(({ theme }) => {
  return {
    color: theme.palette.grey[100],
    transition: 'color 0.2s ease',
    '&.label-checked.active': {
      color: theme.palette.tertiary.main,
    },
    '&.label-default.active': {
      color: theme.palette.primary.main,
    },
  };
});
