import { Button } from '@mui/material';
import { useState } from 'react';
import './App.css';
import { ModalAddTransaction } from './ModalAddTransaction';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const onModalCancel = () => {
    setIsModalOpened(false);
  };

  return (
    <ThemeConfig>
      <GlobalStyles />
      <div className="App">
        <Button
          onClick={() => {
            setIsModalOpened(true);
          }}
        >
          open
        </Button>
        <ModalAddTransaction onClose={onModalCancel} open={isModalOpened} />
      </div>
    </ThemeConfig>
  );
}

export default App;
