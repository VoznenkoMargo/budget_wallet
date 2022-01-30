import { Box, Divider } from '@mui/material';
import { Container } from 'components/common/Container';
import {
  StyledToolbar,
  Header,
  ExitButton,
  UserName,
  LogoName,
} from './AppBar.styled';
import { ReactComponent as LogoIcon } from 'images/logo_wallet.svg';

const StyledAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header>
        <Container>
          <StyledToolbar>
            <Box
              sx={{ display: 'flex', alignItems: 'center', columnGap: '20px' }}
            >
              <LogoIcon />
              <LogoName>Wallet</LogoName>
            </Box>
            <Box
              sx={{ display: 'flex', alignItems: 'center', columnGap: '15px' }}
            >
              <UserName>Name</UserName>
              <Divider orientation="vertical" flexItem />
              <ExitButton>Exit</ExitButton>
            </Box>
          </StyledToolbar>
        </Container>
      </Header>
    </Box>
  );
};

export default StyledAppBar;
