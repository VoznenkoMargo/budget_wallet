import { Box, Divider } from '@mui/material';
import { useTheme } from '@mui/system';
import { Container, Logo } from 'components/common';
import { useNavigate } from 'react-router-dom';
import { StyledToolbar, Header, ExitButton, UserName } from './AppBar.styled';

const StyledAppBar = () => {
  const navigate = useNavigate();
  const { breakpoints } = useTheme();
  const handleClick = () => {
    navigate('/login');
  };

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
            <ExitButton onClick={handleClick}>
              <div>Exit</div>
            </ExitButton>
          </Box>
        </StyledToolbar>
      </Container>
    </Header>
  );
};

export default StyledAppBar;
