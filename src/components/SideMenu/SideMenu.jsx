import { CurrentBalance } from './CurrentBalance';
import { NavMenu } from './NavMenu';
import { MoneyExchangeTable } from './MoneyExchangeTable';
import { StyledNavBox, StyledSideMenu } from './SideMenu.style';
import { useTheme } from '@mui/material';
import { useLocation } from 'react-router';
import { useMediaQuery } from 'react-responsive';
import { ROUTES } from 'constants/routes';

const SideMenu = () => {
  const { breakpoints } = useTheme();
  const { pathname } = useLocation();
  const isSmallScreen = useMediaQuery({ maxWidth: breakpoints.values.tablet });

  return (
    <StyledSideMenu>
      <StyledNavBox>
        <NavMenu />
        {isSmallScreen && pathname === ROUTES.MAIN ? <CurrentBalance /> : null}
        {!isSmallScreen && <CurrentBalance />}
      </StyledNavBox>
      {!isSmallScreen && <MoneyExchangeTable />}
    </StyledSideMenu>
  );
};

export default SideMenu;
