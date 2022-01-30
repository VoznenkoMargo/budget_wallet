import './App.css';
import { CssBaseline } from '@mui/material';
import ThemeConfig from 'theme';
import GlobalStyles from 'theme/globalStyles';
import StatisticsPage from 'pages/StatisticsPage/StatisticsPage';
import { Container, ButtonAddTransaction } from 'components/common';
import { useState } from 'react';
import { AppBackground, ModalAddTransaction, AppBar } from 'components';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <ThemeConfig>
      <CssBaseline />
      <GlobalStyles />
      <div className="App">
        <AppBar />
        <Container
          sx={{
            padding: '40px 0',
            height: 'calc(100% - 77px)',
            position: 'relative',
            '@media (max-width: 1160px)': {
              padding: '40px',
            },
          }}
        >
          <StatisticsPage />
          <ButtonAddTransaction
            onClick={() => {
              setOpen(true);
            }}
          />
          <AppBackground />
        </Container>
        <ModalAddTransaction
          open={open}
          onClose={() => {
            console.log('click');
            setOpen(false);
          }}
        />
      </div>
    </ThemeConfig>
  );
};

export default App;
