import s from './RegistrationPage.module.css';
import finance from 'assets//images/finance-registration.png';
import { Typography } from '@mui/material';
import RegistrationForm from 'components/Registration/RegistrationForm/RegistrationForm';
import { AppBackground } from 'components';

const RegistrationPage = (props) => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.left}>
          <img src={finance} alt="finance-app" className={s.image} />
          <Typography
            variant="h3"
            component="div"
            align="center"
            fontFamily="Poppins"
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
      <AppBackground />
    </>
  );
};

export default RegistrationPage;
