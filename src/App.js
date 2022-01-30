import './App.css';
import { CssBaseline } from '@mui/material';
import ThemeConfig from 'theme';
import GlobalStyles from 'theme/globalStyles';
import StatisticsPage from 'pages/StatisticsPage/StatisticsPage';
import { AppBar } from 'components/AppBar';
import { Container, ButtonAddTransaction } from 'components/common';

function App() {
  return (
    <ThemeConfig>
      <CssBaseline />
      <GlobalStyles />
      <div className="App">
        <AppBar />
        <Container>
          <StatisticsPage />
          <ButtonAddTransaction />
        </Container>
      </div>
    </ThemeConfig>
  );
}

export default App;
