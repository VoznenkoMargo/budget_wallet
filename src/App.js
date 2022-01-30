import './App.css';
import { CssBaseline } from '@mui/material';
import ThemeConfig from 'theme';
import GlobalStyles from 'theme/globalStyles';
import StatisticsPage from 'pages/StatisticsPage/StatisticsPage';
import { AppBar } from 'components/AppBar';

function App() {
  return (
    <ThemeConfig>
      <CssBaseline />
      <GlobalStyles />
      <div className="App">
        <AppBar />
        <StatisticsPage />
      </div>
    </ThemeConfig>
  );
}

export default App;
