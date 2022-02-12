import s from './LoginForm.module.css';
import { Button, Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Logo } from 'components/common';
import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import CustomInput from './CustomInput';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState } from './../../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    userSelector
  );
  useEffect(() => {
    if (isError) {
      console.error(errorMessage);
      dispatch(clearState());
    }
    if (isSuccess) {
      navigate('/');
    }
  }, [isError, isSuccess]);


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
  const navigate = useNavigate();
  const handleClickRegistration = () => {
    navigate('/registration');
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
            dispatch(loginUser(values));
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
                  type="submit"
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
