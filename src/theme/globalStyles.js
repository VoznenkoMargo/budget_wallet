import { useTheme } from '@mui/material/styles';
import { GlobalStyles as GlobalThemeStyles } from '@mui/material';

const GlobalStyles = () => {
  const { typography } = useTheme();

  return (
    <GlobalThemeStyles
      styles={{
        '*': {
          margin: 0,
        },
        html: {
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          width: '100%',
          height: '100%',
          fontWeight: typography.fontWeightRegular,
          fontFamily: typography.fontFamily.secondary,
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        'body::-webkit-scrollbar': {
          width: '4px',
        },
        'body::-webkit-scrollbar-thumb': {
          background: '#c2c2c2',
          borderRadius: '10px',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
      }}
    />
  );
};

export default GlobalStyles;
