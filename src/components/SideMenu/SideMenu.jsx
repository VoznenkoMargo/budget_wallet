import React from 'react';
import {CurrentBalance} from "./CurrentBalance";
import {NavMenu} from "./NavMenu";
import {MoneyExchangeTable} from "./MoneyExchangeTable";
import {StyledNavBox, StyledSideMenu} from "./SideMenu.style"
import { Box } from '@mui/material';
import { useTheme } from '@mui/system';

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
  const {breakpoints} = useTheme();
  return (
    <StyledSideMenu>
      <StyledNavBox>
        <NavMenu/>
        <CurrentBalance balance={currentBalance}/>
      </StyledNavBox>
      <Box
        sx={{
          marginTop: '30px',

          [breakpoints.down('desktop')]: {
            flex: '1 1 auto',
            marginLeft: '20px',
            marginTop: '0',

            '>div': {
              height: '100%',
            },
          },

          [breakpoints.down('tablet')]: {
            position: 'absolute',
            left: '-1000px',
          },
        }}
      >
        <MoneyExchangeTable
          moneyExchangeData = {moneyExchangeData}
        />
      </Box>
    </StyledSideMenu>
  );
};

export default SideMenu;