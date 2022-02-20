import { styled } from '@mui/system';

export const Background = styled((props) => <div {...props} />)(({ theme }) => {
  return {
    position: 'fixed',
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.grey[0],
    top: 0,
    left: 0,
    // filter: 'blur(50px)',
    overflow: 'hidden',
    img: {
      position: 'absolute',
      opacity: 0.7,
    },
  };
});

export const Shape = styled('img')(({ theme }) => {
  return {
    maxWidth: '100%',
  };
});
