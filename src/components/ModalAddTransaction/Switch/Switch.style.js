import { styled, alpha } from '@mui/system';

export const SwitchButton = styled((props) => (
  <input type="checkbox" {...props} />
))(({ theme }) => {
  const { palette } = theme;

  return {
    position: 'relative',
    appearance: 'none',
    width: '80px',
    height: '40px',
    backgroundColor: palette.common.white,
    borderRadius: '5rem',
    border: `1px solid ${palette.grey[100]}`,
    cursor: 'pointer',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '44px',
      height: '44px',
      backgroundColor: palette.primary.main,
      boxShadow: `0px 6px 15px ${alpha(palette.primary.main, 0.5)}`,
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
    '&:active::before': {
      transform: 'translateY(-50%) scale(0.9)',
    },
    '&:checked::before': {
      left: '50%',
      backgroundColor: palette.tertiary.main,
      boxShadow: `0px 6px 15px ${alpha(palette.tertiary.main, 0.5)}`,
      backgroundImage: `url('data:image/svg+xml;utf8, <svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1L20 0.999999" stroke="white" stroke-width="2"/></svg>')`,
    },
  };
});

export const Label = styled('span')(({ checked, theme }) => {
  const { palette } = theme;

  return {
    transition: 'color 0.2s ease',
    '&.label-checked': {
      color: checked ? palette.tertiary.main : palette.grey[100],
    },
    '&.label-default': {
      color: !checked ? palette.primary.main : palette.grey[100],
    },
  };
});
