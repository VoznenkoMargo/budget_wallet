import React from 'react';
import {CurrentBalance} from "./CurrentBalance";
import {NavMenu} from "./NavMenu";
import {MoneyExchangeTable} from "./MoneyExchangeTable";
import {StyledNavBox, StyledSideMenu} from "./SideMenu.style"
import { useTheme } from '@mui/system';
import { Box } from '@material-ui/core';

function createMoneyExchangeData(Currency, Purchase, Sale) {
  return {Currency, Purchase, Sale};
}

const moneyExchangeData = [
  createMoneyExchangeData('USD', 27.55, 27.65),
  createMoneyExchangeData('EUR', 30.00, 30.10),
  createMoneyExchangeData('RUB', 0.00, 0.00),
];

const currentBalance = 24000;

const SideMenu = () => {
  const { breakpoints } = useTheme();
  return (
    <StyledSideMenu>
      <StyledNavBox>
        <NavMenu/>
        <CurrentBalance balance={currentBalance}/>
      </StyledNavBox>
      <MoneyExchangeTable
        moneyExchangeData = {moneyExchangeData}
      />
    </StyledSideMenu>
  );
};

export default SideMenu;