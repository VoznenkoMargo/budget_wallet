import { styled } from '@mui/system';

export const Background = styled('div')(() => {
  return {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: '-100',
    filter: 'blur(50px)',
    overflow: 'hidden',
    img: {
      position: 'absolute',
      opacity: 0.7,
    },
  };
});

export const Shape = styled('img')(() => {
  return {
    maxWidth: '100%',
  };
});
