import { ListItemIcon, ListItemText } from '@mui/material';
import { ExchangeRateIcon, HomeIcon, StatisticIcon } from './Icons';
import { StyledListItem, StyledNavMenu } from './NavMenu.style';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

function createMenuData(icon, menuName, path) {
  return { icon, menuName, path };
}

const menuItems = [
  createMenuData(<HomeIcon />, 'Main', ROUTES.MAIN),
  createMenuData(<StatisticIcon />, 'Statistic', ROUTES.STATISTICS),
  createMenuData(<ExchangeRateIcon />, 'Exchange rate', ROUTES.EXCHANGE_RATE),
];

const NavMenu = () => {
  return (
    <StyledNavMenu>
      {menuItems.map((menuItem) => (
        <StyledListItem key={menuItem.menuName}>
          <NavLink
            to={menuItem.path}
            style={{
              color: 'inherit',
              textDecoration: 'inherit',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ListItemIcon>{menuItem.icon}</ListItemIcon>
            <ListItemText primary={menuItem.menuName} />
          </NavLink>
        </StyledListItem>
      ))}
    </StyledNavMenu>
  );
};

export default NavMenu;
