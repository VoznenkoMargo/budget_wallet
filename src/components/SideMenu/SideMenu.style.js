import { styled } from '@mui/material/styles';
import React from 'react';
import { useTheme } from '@emotion/react';

export const StyledSideMenu = styled((props) => <div {...props} />)(
  ({ theme }) => {
    const { breakpoints } = useTheme();

    return {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '30px',
      [breakpoints.between('tablet', 'desktop')]: {
        justifyContent: 'center',
      },
      [breakpoints.down('tablet')]: {
        maxWidth: '100%',
      },
      '@media (max-width: 1160px)': {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        columnGap: '20px',
      },
      '@media (max-width: 600px)': {
        flexDirection: 'column',
        alignItems: 'center',
      },
    };
  }
);

export const StyledNavBox = styled((props) => <div {...props} />)(
  ({ theme }) => {
    const { breakpoints } = useTheme();

    return {
      maxWidth: '350px',
      flex: '1 0 auto',

      [breakpoints.down('tablet')]: {
        width: '280px',
      },
    };
  }
);
