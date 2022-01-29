import './App.css';
import { CssBaseline } from '@mui/material';
import ThemeConfig from 'theme';
import GlobalStyles from 'theme/globalStyles';

function App() {
  return (
    <ThemeConfig>
      <CssBaseline />
      <GlobalStyles />
      <div className="App"></div>
    </ThemeConfig>
  );
}

export default App;
