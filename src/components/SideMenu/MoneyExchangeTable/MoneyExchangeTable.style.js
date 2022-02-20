import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Table } from '@mui/material';
import RateBackgroundImg from './RateBackgroundImg.png';

export const StyledTable = styled((props) => <Table {...props} />)(
  ({ theme }) => {
    const { breakpoints, palette } = theme;

    return {
      '& .MuiTableCell-root': {
        paddingRight: '30px',
        paddingLeft: '30px',
        color: palette.common.white,
        fontWeight: '400',
        borderBottom: 'none',

        [breakpoints.down('desktop')]: {
          paddingRight: '20px',
          paddingLeft: '20px',
        },
      },

      '& .MuiTableCell-root:last-child': {
        textAlign: 'right',
      },

      '& .MuiTableHead-root': {
        '& .MuiTableCell-head': {
          paddingTop: '17px',
          paddingBottom: '20px',
          fontSize: '18px',
          lineHeight: '1.3',
          backgroundColor: alpha(palette.common.white, 0.2),

          [breakpoints.down('desktop')]: {
            paddingTop: '11px',
            paddingBottom: '16px',
          },
        },

        '& .MuiTableCell-head:first-of-type': {
          borderTopLeftRadius: '30px',
        },
        '& .MuiTableCell-head:last-child': {
          borderTopRightRadius: '30px',
        },
      },

      '& .MuiTableBody-root': {
        '& .MuiTableRow-root:first-of-type': {
          '& .MuiTableCell-body': {
            paddingTop: '20px',
            [breakpoints.down('desktop')]: {
              paddingTop: '10px',
            },
          },
        },

        '& .MuiTableRow-root:last-child': {
          '& .MuiTableCell-body': {
            paddingBottom: '19px',
          },
        },

        '& .MuiTableCell-body': {
          paddingTop: '27px',
          paddingBottom: '0',
          fontSize: '16px',

          [breakpoints.down('desktop')]: {
            paddingTop: '14px',
          },
        },
      },

      [breakpoints.down('tablet')]: {
        background: palette.secondary.main,
        borderRadius: '30px',
        backgroundImage: `url(${RateBackgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: '50% 75px',
      },
    };
  }
);

export const TableContainer = styled('div')(({ theme }) => {
  const { breakpoints, palette } = theme;

  return {
    maxWidth: '350px',
    height: '46vh',
    background: palette.secondary.main,
    borderRadius: '30px',
    webkitFilter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    backgroundImage: `url(${RateBackgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'bottom',

    [breakpoints.down('desktop')]: {
      height: 'auto',
      marginTop: '0',
      flex: '1 1 auto',
    },

    [breakpoints.down('tablet')]: {
      backgroundImage: 'none',
      margin: '0 auto',
    },
  };
});
