import { styled } from '@mui/system';
import { Container } from 'components/common';

export const AppContainer = styled(Container)(({ theme }) => {
  const { breakpoints } = theme;
  return {
    height: 'calc(100% - 77px)',
    position: 'relative',
    zIndex: 20,
    display: 'flex',
    justifyContent: 'space-between',
    [breakpoints.down('desktop')]: {
      padding: '0 30px',
      flexDirection: 'column',
      rowGap: '40px',
      justifyContent: 'initial',
      height: 'auto',
    },
    [breakpoints.down('tablet')]: {
      padding: '0 20px',
      rowGap: '25px',
    },
  };
});

export const Aside = styled('aside')(({ theme }) => {
  const { breakpoints } = theme;
  return {
    paddingTop: '40px',
    paddingRight: '30px',
    height: '100%',
    position: 'fixed',
    [breakpoints.down('desktop')]: {
      padding: '20px 0 0 0',
      width: '100%',
      position: 'static',
    },
  };
});

export const Main = styled('main')(({ theme }) => {
  const { breakpoints } = theme;
  return {
    paddingLeft: '30px',
    paddingTop: '30px',
    paddingBottom: '30px',
    width: '100%',
    marginLeft: '355px',
    [breakpoints.down('desktop')]: {
      padding: 0,
      paddingBottom: '20px',
      marginLeft: 0,
    },
  };
});
