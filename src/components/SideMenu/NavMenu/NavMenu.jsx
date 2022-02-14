import { ListItemIcon, ListItemText } from '@mui/material';
import { ExchangeRateIcon, HomeIcon, StatisticIcon } from './Icons';
import { StyledListItem, StyledNavMenu } from './NavMenu.style';
import { NavLink } from 'react-router-dom';

function createMenuData(icon, menuName, path) {
  return { icon, menuName, path };
}

const menuItems = [
  createMenuData(<HomeIcon />, 'Main', '/'),
  createMenuData(<StatisticIcon />, 'Statistic', '/statistic'),
  createMenuData(<ExchangeRateIcon />, 'Exchange rate', '/'),
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
