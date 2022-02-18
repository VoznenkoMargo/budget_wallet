const { styled } = require('@mui/system');

export const ModalContent = styled('div')(({ theme }) => {
  const { breakpoints } = theme;

  return {
    width: '300px',
    backgroundColor: '#fff',
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

export const Title = styled('h2')(({ theme }) => {
  return {
    fontSize: '22px',
  };
});

export const ButtonsContainer = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    columnGap: '15px',
    justifyContent: 'flex-end',
  };
});
