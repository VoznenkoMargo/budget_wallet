import { CurrentBalance } from './CurrentBalance';
import { NavMenu } from './NavMenu';
import { MoneyExchangeTable } from './MoneyExchangeTable';
import { StyledNavBox, StyledSideMenu } from './SideMenu.style';
import { useMedia } from 'react-media';
import { useTheme } from '@mui/material';
import { useLocation } from 'react-router';

const SideMenu = () => {
  const { breakpoints } = useTheme();
  const { pathname } = useLocation();
  const isSmallScreen = useMedia({
    query: `(max-width: ${breakpoints.values.tablet}px)`,
  });

  return (
    <StyledSideMenu>
      <StyledNavBox>
        <NavMenu />
        {isSmallScreen && pathname === '/' ? <CurrentBalance /> : null}
        {!isSmallScreen && <CurrentBalance />}
      </StyledNavBox>
      {!isSmallScreen && <MoneyExchangeTable />}
    </StyledSideMenu>
  );
};

export default SideMenu;
