import React from 'react';
import { CurrentBalance } from './CurrentBalance';
import { NavMenu } from './NavMenu';
import { MoneyExchangeTable } from './MoneyExchangeTable';
import { StyledNavBox, StyledSideMenu } from './SideMenu.style';

const currentBalance = 24000;

const SideMenu = () => {
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
