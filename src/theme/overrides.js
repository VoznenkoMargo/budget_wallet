import AbelTTF from 'assets/fonts/Abel/Abel-Regular.ttf';
import PoppinsRegularTTF from 'assets/fonts/Poppins-Regular/Poppins-Regular.ttf';
import PoppinsBoldTTF from 'assets/fonts/Poppins-Bold/Poppins-Bold.ttf';

import AbelWOFF from 'assets/fonts/Abel/Abel-Regular.woff';
import PoppinsRegularWOFF from 'assets/fonts/Poppins-Regular/Poppins-Regular.woff';
import PoppinsBoldWOFF from 'assets/fonts/Poppins-Bold/Poppins-Bold.woff';

import AbelWOFF2 from 'assets/fonts/Abel/Abel-Regular.woff2';
import PoppinsRegularWOFF2 from 'assets/fonts/Poppins-Regular/Poppins-Regular.woff2';
import PoppinsBoldWOFF2 from 'assets/fonts/Poppins-Bold/Poppins-Bold.woff2';

const overrides = {
  MuiCssBaseline: {
    styleOverrides: `
      @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsRegularWOFF2}) format('woff2'),
            url(${PoppinsRegularTTF}) format('truetype'),
            url(${PoppinsRegularWOFF}) format('woff');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
    
      @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsBoldWOFF2}) format('woff2'),
            url(${PoppinsBoldTTF}) format('truetype'),
            url(${PoppinsBoldWOFF}) format('woff');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
    
      @font-face {
        font-family: 'Abel';
        src: url(${AbelWOFF2}) format('woff2'),
            url(${AbelTTF}) format('truetype'),
            url(${AbelWOFF}) format('woff');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
    `,
  },
};

export default overrides;
