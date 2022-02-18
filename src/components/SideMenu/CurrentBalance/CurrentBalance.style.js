import React from 'react';
import { styled } from '@mui/material/styles';

export const StyledCurrentBalance = styled((props) => <div {...props} />)(
  ({ theme }) => {
    const { breakpoints, palette } = theme;

    return {
      maxWidth: '350px',
      padding: '8px 40px 13px 40px',
      marginTop: '30px',
      textAlign: 'left',
      backgroundColor: palette.common.white,
      borderRadius: '30px',

      [breakpoints.between('tablet', 'desktop')]: {
        marginTop: '20px',
      },

      [breakpoints.down('tablet')]: {
        marginTop: '18px',
      },
    };
  }
);

export const StyledCurrentBalanceText = styled((props) => <p {...props} />)(
  ({ theme }) => {
    return {
      marginTop: '0',
      marginBottom: '10px',
      fontSize: '12px',
      lineHeight: '1.3',
      textTransform: 'uppercase',
      color: '#A6A6A6',
    };
  }
);

export const StyledCurrentBalanceTotal = styled((props) => <p {...props} />)(
  ({ theme }) => {
    const { typography } = theme;

    return {
      marginTop: '0',
      marginBottom: '0',
      fontFamily: typography.fontFamily.primary,
      fontSize: '30px',
      fontWeight: typography.fontWeightBold,
      lineHeight: '1.5',
    };
  }
);
