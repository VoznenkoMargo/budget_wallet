import React, { useState } from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';
import { ExchangeRateIcon, HomeIcon, StatisticIcon } from './Icons';
import { StyledListItem, StyledNavMenu } from './NavMenu.style';
import { NavLink, useMatch } from 'react-router-dom';

function createMenuData(Icon, MenuName, Path) {
  return { Icon, MenuName, Path };
}

const menuItems = [
  createMenuData(<HomeIcon />, 'Main', '/main'),
  createMenuData(<StatisticIcon />, 'Statistic', '/statistic'),
  createMenuData(<ExchangeRateIcon />, 'Exchange rate', '/'),
];

const NavMenu = () => {
  return (
    <StyledNavMenu>
      {menuItems.map((menuItem) => (
        <StyledListItem
          key={menuItem.MenuName}
          path={menuItem.Path}
        >
          <NavLink
            to={menuItem.Path}
            style={{
              color: 'inherit',
              textDecoration: 'inherit',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ListItemIcon>{menuItem.Icon}</ListItemIcon>
            <ListItemText primary={menuItem.MenuName} />
          </NavLink>
        </StyledListItem>
      ))}
    </StyledNavMenu>
  );
};

export default NavMenu;
