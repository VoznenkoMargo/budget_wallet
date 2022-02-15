import s from './NotFoundPage.module.scss';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { Container } from '@mui/material';
import { ROUTES } from 'constants/routes';

const NotFoundPage = () => {
  return (
    <Container
      sx={{
        height: 'calc(100% - 77px)',
        position: 'relative',
        zIndex: 20,
        display: 'flex',
        justifyContent: 'space-between',
        '@media (max-width: 1160px)': {
          padding: '0 30px',
          flexDirection: 'column',
          rowGap: '40px',
          justifyContent: 'initial',
          height: 'auto',
        },
        '@media (max-width: 600px)': {
          padding: '0 20px',
        },
      }}
    >
      <Box
        sx={{
          paddingLeft: '30px',
          paddingTop: '30px',
          width: '100%',
          margin: 'auto',
          '@media (max-width: 1160px)': {
            padding: 0,
            marginLeft: 0,
          },
        }}
      >
        <div className={s.notFoundContainer}>
          <h1 className={s.errorTitle}>OOOOPS!</h1>
          <img
            className={s.image}
            //   src="https://cdn.pixabay.com/photo/2016/04/24/22/30/monitor-1350918_960_720.png"
            //   src="https://cdn.pixabay.com/photo/2016/10/25/23/54/not-found-1770320_960_720.jpg"
            src="https://cdn.pixabay.com/photo/2021/03/04/21/37/dog-6069677_960_720.png"
            //   src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_960_720.jpg"
            alt="error"
          />
          <Link className={s.link} to={ROUTES.MAIN}>
            Let's start over again
          </Link>
        </div>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
