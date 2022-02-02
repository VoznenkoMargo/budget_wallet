import {styled} from "@mui/material/styles";
import React from "react";
import {useTheme} from "@emotion/react";

export const StyledSideMenu = styled((props) =>
  <div
    {...props}
  />)(({ theme }) => {
    const { breakpoints } = useTheme();

    return {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      maxWidth: '350px',

      [breakpoints.between('tablet', 'desktop')]: {
        maxWidth: '700px',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '40px',
      },

      [breakpoints.down('tablet')]: {
        maxWidth: '100%',
      },
    }
  })

export const StyledNavBox = styled((props) =>
  <div
    {...props}
  />)(({ theme }) => {
    const { breakpoints } = useTheme();

    return {
      maxWidth: '350px',
      flex: '1 0 auto',

      [breakpoints.down('tablet')]: {
        width: '280px',
        margin: '0 auto 30px auto',
      },
    }
})
