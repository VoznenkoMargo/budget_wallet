import React from 'react';
import {CurrentBalance} from "./CurrentBalance";
import {NavMenu} from "./NavMenu";
import {MoneyExchangeTable} from "./MoneyExchangeTable";
import {StyledNavBox, StyledSideMenu} from "./SideMenu.style"
import { Box } from '@mui/material';
import { useTheme } from '@mui/system';

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
        <MoneyExchangeTable/>
      </Box>
    </StyledSideMenu>
  );
};

export default SideMenu;