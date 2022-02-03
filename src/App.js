import './App.css';
import ThemeConfig from 'theme';
import DiagramTab from './components/DiagramTab/DiagramTab';
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
          sx={[
            (theme) => ({
              height: 'calc(100% - 77px)',
              position: 'relative',
              zIndex: 20,
              display: 'flex',
              justifyContent: 'space-between',
              [theme.breakpoints.down('desktop')]: {
                padding: '0 30px',
                flexDirection: 'column',
                rowGap: '40px',
                justifyContent: 'initial',
                height: 'auto',
              },
              [theme.breakpoints.down('tablet')]: {
                padding: '0 20px',
              },
            }),
          ]}
        >
          <Box
            sx={[
              (theme) => ({
                paddingTop: '40px',
                paddingRight: '30px',
                height: '100%',
                position: 'fixed',
                [theme.breakpoints.down('desktop')]: {
                  padding: '20px 0 0 0',
                  width: '100%',
                  position: 'static',
                },
              }),
            ]}
          >
            <SideMenu />
          </Box>
          <Box
            sx={[
              (theme) => ({
                paddingLeft: '30px',
                paddingTop: '30px',
                paddingBottom: '30px',
                width: '100%',
                marginLeft: '355px',
                [theme.breakpoints.down('desktop')]: {
                  padding: 0,
                  marginLeft: 0,
                },
              }),
            ]}
          >
            <DiagramTab />
            {/* <StatisticsPage /> */}
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
