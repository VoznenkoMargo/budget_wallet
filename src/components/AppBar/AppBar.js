import { Box, Divider } from '@mui/material';
import { useTheme } from '@mui/system';
import { Container, Logo } from 'components/common';
import { StyledToolbar, Header, ExitButton, UserName } from './AppBar.styled';

const StyledAppBar = () => {
  const { breakpoints } = useTheme();

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
              [breakpoints.down('tablet')]: {
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
