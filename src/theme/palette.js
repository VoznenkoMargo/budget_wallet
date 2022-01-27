import { alpha } from '@mui/material/styles';

const COMMON = {
  white: '#ffffff',
  black: '#000000',
  transparentWhite: alpha('#ffffff', 0.2),
};

const PRIMARY = {
  lighter: '#E5F1EF',
  light: alpha('#24CCA7', 0.5),
  main: '#24CCA7',
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#C5BAFF',
  light: '#6E78E8',
  main: '#4A56E2',
  contrastText: '#fff',
};

const TERTIARY = {
  light: alpha('#FF6596', 0.5),
  main: '#FF6596',
  contrastText: '#fff',
};

const CHART_COLORS = {
  violet: ['#4A56E2', '#6E78E8', '#C5BAFF'],
  blue: ['#81E1FF'],
  green: ['#00AD84', '#24CCA7'],
  yellow: ['#FED057'],
  red: ['#FD9498', '#FFD8D0'],
};

const TEXT = {
  primary: '#000000',
};

const GREY = {
  0: '#FFFFFF',
  100: '#E0E0E0',
  200: '#BDBDBD',
};

const palette = {
  common: { ...COMMON },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  tertiary: { ...TERTIARY },
  chart: { ...CHART_COLORS },
  text: { ...TEXT },
  grey: { ...GREY },
};

export default palette;
