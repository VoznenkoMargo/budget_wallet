import { styled } from '@mui/system';

export const ModalContent = styled('div')(({ theme }) => {
  const { breakpoints, palette } = theme;

  return {
    width: '300px',
    backgroundColor: palette.common.white,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',

    [breakpoints.down('tablet')]: {
      width: '90%',
    },
  };
});

export const Title = styled('h2')(() => {
  return {
    fontSize: '22px',
    fontWeight: '400',
  };
});

export const ButtonsContainer = styled('div')(() => {
  return {
    display: 'flex',
    columnGap: '15px',
    justifyContent: 'flex-end',
  };
});
