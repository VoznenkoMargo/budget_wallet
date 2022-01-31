import React from 'react';
import {CurrentBalance} from "./CurrentBalance";
import {NavMenu} from "./NavMenu";
import {MoneyExchangeTable} from "./MoneyExchangeTable";
import {StyledNavBox, StyledSideMenu} from "./SideMenu.style"

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
  return (
    <StyledSideMenu>
      <StyledNavBox>
        <NavMenu/>
        <CurrentBalance balance={currentBalance}/>
      </StyledNavBox>
      <MoneyExchangeTable moneyExchangeData = {moneyExchangeData}/>
    </StyledSideMenu>
  );
};

export default SideMenu;