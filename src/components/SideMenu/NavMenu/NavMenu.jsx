import React, {useState} from 'react';
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {ExchangeRateIcon, HomeIcon, StatisticIcon} from "./Icons";
import {StyledListItem, StyledNavMenu} from "./NavMenu.style";

function createMenuData(Icon, MenuName, Path) {
  return {Icon, MenuName, Path};
}

const menuItems = [
  createMenuData(<HomeIcon/>, 'Main', '/'),
  createMenuData(<StatisticIcon/>, 'Statistics', '/'),
  createMenuData(<ExchangeRateIcon/>, 'Exchange rate', '/'),
]

const NavMenu = () => {
  const [checked, setChecked] = useState('Main');

  return (
    <StyledNavMenu>
      {menuItems.map(menuItem => (
        <StyledListItem
          key={menuItem.MenuName}
          checked={checked === menuItem.MenuName}
          onClick={() => setChecked(menuItem.MenuName)}
        >
          <ListItemIcon>
            {menuItem.Icon}
          </ListItemIcon>
          <ListItemText
            primary={menuItem.MenuName}
          />
        </StyledListItem>
      ))}
    </StyledNavMenu>
  );
};

export default NavMenu;
