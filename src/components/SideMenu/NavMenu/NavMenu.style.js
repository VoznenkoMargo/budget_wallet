import {styled} from "@mui/material/styles";
import {List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {useTheme} from "@emotion/react";

export const StyledNavMenu = styled((props) =>
  <List
    {...props}
  />)(({theme}) => {
    const { breakpoints } = useTheme();

    return {
      display: 'inline-flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      marginTop: '40px',

      [breakpoints.down('desktop')]: {
        marginTop: '30px',
      },

      [breakpoints.down('tablet')]: {
        marginTop: '0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '30px',
      },
    }
  })

export const StyledListItem = styled((props) =>
  <ListItem
    {...props}
  />)(({theme, checked}) => {
    const { breakpoints, typography, palette} = useTheme();

    return {
      width: 'auto',
      padding: '0',
      cursor: 'pointer',

      ':not(:first-of-type)': {
        paddingTop: '10px',
      },

      ':last-child': {
        position: 'absolute',
        left: '-1000px',
      },

      ':hover': {
        '& .MuiTypography-root': {
          color: palette.secondary.main,
        }
      },

      '.MuiListItemIcon-root': {
        minWidth: 'auto',
        borderRadius: '10px',
        filter: checked? 'drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5))': 'none',
        backgroundColor: checked? palette.common.white : 'none',

        '& .MuiSvgIcon-root': {
          width: '24px',
          height: '24px',
          fill: checked? palette.secondary.main : palette.secondary.light,

          [breakpoints.down('tablet')]: {
            width: '38px',
            height: '38px',
          },
        }
      },

      '.MuiListItemText-root': {
        marginLeft: '20px',

        '& .MuiTypography-root': {
          fontFamily: typography.fontFamily.primary,
          fontSize: '18px',
          fontWeight: checked? typography.fontWeightBold : typography.fontWeightRegular,
          lineHeight: '1.5',
        },

        [breakpoints.down('tablet')]: {
          position: 'absolute',
          left: '-1000px',
        },
      },

      [breakpoints.down('tablet')]: {
        paddingTop: '10px',

        ':last-child': {
          position: 'relative',
          left: '0',
        },
      },
    }
  })
