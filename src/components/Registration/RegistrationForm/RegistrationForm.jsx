import s from './RegistrationForm.module.css';
import logo from 'assets/images/logo_wallet.svg';
import { Typography, Button, Box, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const RegistrationForm = (props) => {
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
          <img src={logo} alt="logo wallet" />
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: '30px',
              lineHeight: '45px',
            }}
          >
            Wallet
          </Typography>
        </div>

        <Box component="form">
          <TextField
            variant="standard"
            required
            className={s.input}
            fullWidth
            id="email"
            placeholder="Email"
            name="email"
            autoComplete="email"
            autoFocus
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
            sx={{
              mb: '35px',
              '.MuiInput-underline:before': {
                borderColor: '#E0E0E0',
              },
            }}
          />
          <TextField
            variant="standard"
            required
            className={s.input}
            fullWidth
            name="password"
            placeholder="Password"
            type="password"
            id="password"
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
          <TextField
            variant="standard"
            required
            className={s.input}
            fullWidth
            name="confirm"
            placeholder="Confirm password"
            type="password"
            id="confirm"
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
          <TextField
            variant="standard"
            required
            className={s.input}
            fullWidth
            name="name"
            placeholder="Your name"
            type="text"
            id="name"
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
            sx={{
              mb: '40px',
              '.MuiInput-underline:before': {
                borderColor: '#E0E0E0',
              },
            }}
          />
          <div className={s.buttons}>
            <Button
              type="submit"
              variant="contained"
              sx={{
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
                padding: '12px 65px',
              }}
            >
              REGISTRATION
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{
                borderRadius: '20px',
                width: '300px',
                fontSize: '18px',
                lineHeight: '23px',
                letterSpacing: '0.1em',
                padding: '12px 65px',
              }}
            >
              LOG IN
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default RegistrationForm;
