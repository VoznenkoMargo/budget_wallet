import React, { useState } from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';
import { ExchangeRateIcon, HomeIcon, StatisticIcon } from './Icons';
import { StyledListItem, StyledNavMenu } from './NavMenu.style';
import { NavLink, } from 'react-router-dom';

function createMenuData(Icon, MenuName, Path) {
  return { Icon, MenuName, Path };
}

const menuItems = [
  createMenuData(<HomeIcon />, 'Main', '/main'),
  createMenuData(<StatisticIcon />, 'Statistics', '/statistic'),
  createMenuData(<ExchangeRateIcon />, 'Exchange rate', '/'),
];

const NavMenu = () => {
  const [checked, setChecked] = useState('Main');

  return (
    <StyledNavMenu>
      {menuItems.map((menuItem) => (
        <StyledListItem
          key={menuItem.MenuName}
          checked={checked === menuItem.MenuName}
          onClick={() => setChecked(menuItem.MenuName)}
        >
          <NavLink to={menuItem.Path} style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <ListItemIcon>{menuItem.Icon}</ListItemIcon>
          <ListItemText primary={menuItem.MenuName} />
           </NavLink>
        </StyledListItem>
      ))}
    </StyledNavMenu>
  );
};

export default NavMenu;
