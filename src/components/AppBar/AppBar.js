import { Box, Divider } from '@mui/material';
import { Container, Logo } from 'components/common';
import { StyledToolbar, Header, ExitButton, UserName } from './AppBar.styled';

const StyledAppBar = () => {
  return (
    <Header>
      <Container>
        <StyledToolbar>
          <Logo />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              columnGap: '15px',
              '@media (max-width: 600px)': {
                columnGap: '10px',
              },
            }}
          >
            <UserName>Name</UserName>
            <Divider orientation="vertical" flexItem />
            <ExitButton>
              <div>Exit</div>
            </ExitButton>
          </Box>
        </StyledToolbar>
      </Container>
    </Header>
  );
};

export default StyledAppBar;
