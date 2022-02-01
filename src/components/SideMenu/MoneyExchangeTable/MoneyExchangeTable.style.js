import React from "react";
import {alpha, styled} from "@mui/material/styles";
import {Table} from "@mui/material";
import RateBackgroundImg from "./RateBackgroundImg.png";
import {useTheme} from "@emotion/react";

export const StyledTable = styled((props) =>
  <Table
    {...props}
  />)(({ theme }) => {
    const { breakpoints, palette } = useTheme();

    return {
      maxWidth: '350px',
      height: '350px',
      marginTop: '30px',
      background: palette.secondary.main,
      borderRadius: '30px',
      webkitFilter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      backgroundImage: `url(${RateBackgroundImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',

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
          backgroundColor: alpha(palette.common.white, 0.2),

        '& .MuiTableCell-head': {
            paddingTop: '17px',
            paddingBottom: '20px',
            fontSize: '18px',
            lineHeight: '1.3',

            [breakpoints.down('desktop')]: {
              paddingTop: '11px',
              paddingBottom: '16px',
            },
          },

          '& .MuiTableCell-head:first-child': {
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

      [breakpoints.down('desktop')]: {
        height: 'auto',
        marginLeft: '20px',
        flex: '1 1 0',
      },

      [breakpoints.down('tablet')]: {
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundPosition: '50% 190%',
      },
      }
    })
