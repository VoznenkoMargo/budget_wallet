import s from './RegistrationForm.module.css';
import { signupUser, userSelector, clearState } from './../../../redux/userSlice';
import { Button, Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Logo } from 'components/common';
import React, { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import CustomInput from './CustomInput';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

const RegistrationForm = (props) => {
  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    userSelector
  );
  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
    if (isError) {
      console.error(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(6, 'Must be at least 6 symbols')
      .max(12, 'Must be no more than 12 symbols')
      .required('Password is required'),
    confirm: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')], 'Passwords does not match'),
    username: yup
      .string()
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
  const navigate = useNavigate();
  const handleClickLogIn = () => {
    navigate('/login');
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
          onSubmit={(values) => {
            dispatch(signupUser(values));
          }}
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
                    fontFamily: 'Abel'
                  }}
                >
                  REGISTRATION
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  onClick={handleClickLogIn}
                  sx={{
                    borderRadius: '20px',
                    width: '300px',
                    fontSize: '18px',
                    lineHeight: '23px',
                    letterSpacing: '0.1em',
                    padding: '12px 65px',
                    fontFamily: 'Abel',
                    borderColor: '#4A56E2',
                    color: '#4A56E2'
                  }}
                >
                  LOG IN
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

export default RegistrationForm;
