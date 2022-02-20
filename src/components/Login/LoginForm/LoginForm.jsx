import s from './LoginForm.module.css';
import { Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Logo } from 'components/common';
import { Formik, Form } from 'formik';
import CustomInput from './CustomInput';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, resetError } from 'redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { FilledButton, OutlinedButton } from 'components/common';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const LoginForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    toast.error(error);

    return () => {
      dispatch(resetError());
    };
  }, [error, dispatch]);

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '540px',
        background: '#fff',
        borderRadius: '20px',
        padding: '40px 65px 60px 65px',
        '@media (max-width: 600px)': {
          padding: '0 20px',
        },
      }}
    >
      <div className={s.logo__body}>
        <Logo />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onLoginHandler}
      >
        {({ dirty }) => (
          <Form style={{ width: '100%' }}>
            <div className={s.inputs}>
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
            </div>
            <div className={s.buttons}>
              <FilledButton type="submit">Log in</FilledButton>
              <OutlinedButton onClick={handleClickRegistration}>
                Registration
              </OutlinedButton>
            </div>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
