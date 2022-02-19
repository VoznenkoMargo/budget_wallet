import s from './LoginForm.module.css';
import { Button, Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Logo } from 'components/common';
import { Formik, Form } from 'formik';
import CustomInput from './CustomInput';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from 'redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

const LoginForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(6, 'Must be at least 6 symbols')
      .max(12, 'Must be no more than 12 symbols')
      .required('Password is required'),
  });
  const initialValues = {
    email: '',
    password: '',
  };
  const handleClickRegistration = () => {
    navigate(ROUTES.REGISTRATION);
  };

  const onLoginHandler = (values) => {
    dispatch(loginUser(values));
  };

  return (
    <div className={s.form}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div className={s.logo__body}>
          <Logo />
        </div>
        {/* <Box component="form"> */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onLoginHandler}
        >
          {({ dirty }) => (
            <Form>
              <CustomInput
                name="email"
                label="email"
                type="text"
                id="email"
                placeholder="Email"
                autoComplete="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon
                        sx={{
                          color: '#E0E0E0',
                          margin: '0 10px 10px 10px',
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomInput
                name="password"
                type="password"
                id="password"
                placeholder="Password"
                autoComplete="current-password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon
                        sx={{
                          color: '#E0E0E0',
                          margin: '0 10px 10px 10px',
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />

              <div className={s.buttons}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: '20px',
                    mb: '20px',
                    background: '#24CCA7',
                    borderRadius: '20px',
                    width: '300px',
                    '&:hover': {
                      background: '#1da386',
                    },
                    fontSize: '18px',
                    lineHeight: '23px',
                    letterSpacing: '0.1em',
                    padding: '12px 55px',
                    fontFamily: 'Abel',
                  }}
                >
                  LOG IN
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={handleClickRegistration}
                  sx={{
                    borderRadius: '20px',
                    borderColor: '#4A56E2',
                    color: '#4A56E2',
                    width: '300px',
                    fontSize: '18px',
                    lineHeight: '23px',
                    letterSpacing: '0.1em',
                    padding: '12px 65px',
                    fontFamily: 'Abel',
                  }}
                >
                  REGISTRATION
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Box>
      {/* </Box> */}
    </div>
  );
};

export default LoginForm;
