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
      marginBottom: '20px',
      paddingBottom: '10px',
      paddingLeft: '10px',
      [breakpoints.between('tablet', 'desktop')]: {
        maxWidth: '100%',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        paddingRight: '10px',
      },

      [breakpoints.down('tablet')]: {
        maxWidth: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
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
      flex: '1 1 0',

      [breakpoints.down('tablet')]: {
        maxWidth: '100%',
      },
    }
})
