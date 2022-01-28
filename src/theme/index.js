import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';

const ThemeConfig = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      typography,
      breakpoints,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeConfig;
