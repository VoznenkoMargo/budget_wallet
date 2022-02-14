import { styled } from '@mui/material/styles';
import { List, ListItem } from '@mui/material';
import { useMatch } from 'react-router-dom';

export const StyledNavMenu = styled((props) => <List {...props} />)(
  ({ theme }) => {
    const { breakpoints } = theme;

    return {
      display: 'inline-flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      paddingTop: '0',
      paddingBottom: '0',

      [breakpoints.down('tablet')]: {
        marginTop: '0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
      },
    };
  }
);

export const StyledListItem = styled((props) => <ListItem {...props} />)(
  ({ theme, path }) => {
    const { breakpoints, typography, palette } = theme;
    const match = useMatch(path);

    return {
      width: 'auto',
      padding: '0',
      cursor: 'pointer',

      ':not(:first-of-type)': {
        marginTop: '10px',

        [breakpoints.down('tablet')]: {
          marginTop: 0,
        },
      },

      ':last-child': {
        position: 'absolute',
        left: '-1000px',
      },

      ':hover': {
        '& .MuiTypography-root': {
          color: palette.secondary.main,
        },
      },

      '.MuiListItemIcon-root': {
        minWidth: 'auto',
        borderRadius: '10px',
        filter: match
          ? 'drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5))'
          : 'none',
        backgroundColor: match ? palette.common.white : 'none',

        '& .MuiSvgIcon-root': {
          width: '24px',
          height: '24px',
          fill: match ? palette.secondary.main : palette.secondary.light,

          [breakpoints.down('tablet')]: {
            width: '38px',
            height: '38px',
          },
        },
      },

      '.MuiListItemText-root': {
        marginLeft: '20px',

        '& .MuiTypography-root': {
          fontFamily: typography.fontFamily.primary,
          fontSize: '18px',
          fontWeight: match
            ? typography.fontWeightBold
            : typography.fontWeightRegular,
          lineHeight: '1.5',
        },

        [breakpoints.down('tablet')]: {
          position: 'absolute',
          left: '-1000px',
        },
      },

      [breakpoints.down('tablet')]: {
        ':last-child': {
          position: 'relative',
          left: '0',
        },
      },
    };
  }
);
