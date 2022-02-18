import s from './LoginPage.module.css';
import finance from 'assets/images/finance-login.png';
import purple from 'assets/images/ellipse-purple.png';
import peach from 'assets/images/ellipse-peach.png';
import { Typography } from '@mui/material';
import LoginForm from 'components/Login/LoginForm/LoginForm';

const LoginPage = (props) => {
  
  return (
    <div className={s.wrapper}>
      <img src={peach} alt="" className={s.peach} />
      <div className={s.wrapper__body}>
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
      <img src={purple} alt="" className={s.purple} />
    </div>
  );
};

export default LoginPage;
