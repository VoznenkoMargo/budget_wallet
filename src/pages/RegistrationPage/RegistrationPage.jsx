import s from './RegistrationPage.module.css';
import { Typography } from '@mui/material';
import RegistrationForm from 'components/Registration/RegistrationForm/RegistrationForm';
import { ReactComponent as RegisterImage } from 'assets/images/finance-registration.svg';
import { AppBackground } from 'components';

const RegistrationPage = (props) => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.left}>
          <RegisterImage className={s.image} />
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
