import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import palette from './pallete';
import typography from './typography';

const ThemeConfig = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      typography,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeConfig;
