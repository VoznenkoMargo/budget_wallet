import s from './RegistrationPage.module.css';
import finance from 'assets//images/finance-registration.png';
import purple from 'assets/images/ellipse-purple.png';
import peach from 'assets/images/ellipse-peach.png';
import { Typography, CssBaseline } from '@mui/material';
import RegistrationForm from 'components/Registration/RegistrationForm';

const RegistrationPage = (props) => {
  return (
    <div className={s.wrapper}>
      <CssBaseline />
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
            }}
          >
            Finance App
          </Typography>
        </div>
        <div className={s.right}>
          <RegistrationForm />
        </div>
      </div>
      <img src={purple} alt="" className={s.purple} />
    </div>
  );
};

export default RegistrationPage;
