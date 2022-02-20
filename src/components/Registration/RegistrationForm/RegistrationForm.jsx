import s from './RegistrationForm.module.css';
import React, { useEffect } from 'react';
import { signupUser, resetError } from 'redux/userSlice';
import { Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Logo } from 'components/common';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { ROUTES } from 'constants/routes';
import { OutlinedButton, FilledButton } from 'components/common';
import CustomInput from 'components/Login/LoginForm/CustomInput';
import { toast } from 'react-toastify';

const RegistrationForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    toast.error(error);

    return () => {
      dispatch(resetError());
    };
  }, [error, dispatch]);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .email('Invalid email')
      .required('Email is required'),
    password: yup
      .string()
      .trim()
      .min(6, 'Must be at least 6 symbols')
      .max(12, 'Must be no more than 12 symbols')
      .required('Password is required'),
    confirm: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')], 'Passwords does not match'),
    username: yup
      .string()
      .trim()
      .min(1, 'Must be at least 1 symbols')
      .max(12, 'Must be no more than 12 symbols')
      .required('Name is required'),
  });
  const initialValues = {
    email: '',
    password: '',
    confirm: '',
    username: '',
  };
  const handleClickLogIn = () => {
    navigate(ROUTES.LOGIN);
  };

  const onRegisterHandler = async (values) => {
    dispatch(signupUser(values));
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
        onSubmit={onRegisterHandler}
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

              <CustomInput
                name="confirm"
                id="confirm"
                placeholder="Confirm password"
                type="password"
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
                sx={{
                  mb: '35px',
                  '.MuiInput-underline:before': {
                    borderColor: '#E0E0E0',
                  },
                }}
              />

              <CustomInput
                label="name"
                name="username"
                placeholder="Your name"
                type="text"
                id="username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountBoxIcon
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
              <FilledButton type="submit">Registration</FilledButton>
              <OutlinedButton onClick={handleClickLogIn}>Log in</OutlinedButton>
            </div>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegistrationForm;
