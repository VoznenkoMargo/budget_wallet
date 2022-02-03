import './App.css';
import ThemeConfig from 'theme';
import DiagramTab from './components/DiagramTab/DiagramTab';
import Registration from './components/Registration/RegistrationForm/RegistrationForm';
import StatisticsPage from 'pages/StatisticsPage/StatisticsPage';
import { Container, ButtonAddTransaction } from 'components/common';
import { useState } from 'react';
import { AppBackground, ModalAddTransaction, AppBar } from 'components';
import { SideMenu } from './components/SideMenu';
import { Box } from '@mui/system';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <ThemeConfig>
      <div className="App">
        <AppBar />
        <Container
          sx={{
            height: 'calc(100% - 77px)',
            position: 'relative',
            zIndex: 20,
            display: 'flex',
            justifyContent: 'space-between',
            '@media (max-width: 1160px)': {
              padding: '0 30px',
              flexDirection: 'column',
              rowGap: '40px',
              justifyContent: 'initial',
              height: 'auto',
            },
            '@media (max-width: 600px)': {
              padding: '0 20px',
            },
          }}
        >
          <Box
            sx={{
              paddingTop: '40px',
              paddingRight: '30px',
              height: '100%',
              position: 'fixed',
              '@media (max-width: 1160px)': {
                padding: '20px 0 0 0',
                width: '100%',
                position: 'static',
              },
            }}
          >
            <SideMenu />
          </Box>
          <Box
            sx={{
              paddingLeft: '30px',
              paddingTop: '30px',
              width: '100%',
              marginLeft: '355px',
              '@media (max-width: 1160px)': {
                padding: 0,
                marginLeft: 0,
              },
            }}
          >
            <DiagramTab />
            <StatisticsPage />
            <Registration />
            <ButtonAddTransaction
              onClick={() => {
                setOpen(true);
              }}
            />
          </Box>
        </Container>
        <AppBackground />
        <ModalAddTransaction
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        />
      </div>
    </ThemeConfig>
  );
};

export default App;
