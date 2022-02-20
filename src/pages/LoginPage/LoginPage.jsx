import s from './LoginPage.module.css';
import finance from 'assets/images/finance-login.png';
import { Typography } from '@mui/material';
import LoginForm from 'components/Login/LoginForm/LoginForm';
import { AppBackground } from 'components';

const LoginPage = (props) => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.left}>
          <img src={finance} alt="finance-app" className={s.image} />
          <Typography
            variant="h3"
            component="div"
            align="center"
            sx={{
              fontSize: '30px',
              lineHeight: '45px',
              fontFamily: 'Poppins',
            }}
          >
            Finance App
          </Typography>
        </div>
        <div className={s.right}>
          <LoginForm />
        </div>
      </div>
      <AppBackground />
    </>
  );
};

export default LoginPage;
