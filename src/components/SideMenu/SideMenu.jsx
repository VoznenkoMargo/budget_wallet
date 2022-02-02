import React from 'react';
import { CurrentBalance } from './CurrentBalance';
import { NavMenu } from './NavMenu';
import { MoneyExchangeTable } from './MoneyExchangeTable';
import { StyledNavBox, StyledSideMenu } from './SideMenu.style';
import { Box } from '@mui/material';
import { useTheme } from '@mui/system';

const currentBalance = 24000;

const SideMenu = () => {
  const { breakpoints } = useTheme();
  return (
    <StyledSideMenu>
      <StyledNavBox>
        <NavMenu />
        <CurrentBalance balance={currentBalance} />
      </StyledNavBox>
      <MoneyExchangeTable />
    </StyledSideMenu>
  );
};

export default SideMenu;
