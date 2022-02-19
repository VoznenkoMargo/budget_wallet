import { Box, Divider } from '@mui/material';
import { useTheme } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Logo } from 'components/common';
import { StyledToolbar, Header, ExitButton, UserName } from './AppBar.styled';
import { setIsModalLogoutOpen } from 'redux/globalSlice';
import { ModalLogout } from 'components/ModalLogout';

const AppBar = () => {
  const { breakpoints } = useTheme();
  const dispatch = useDispatch();
  const isModalLogoutOpen = useSelector(
    (state) => state.global.isModalLogoutOpen
  );
  const username = useSelector((state) => state.user.user.username);

  const onLogOutClickHandler = () => {
    dispatch(setIsModalLogoutOpen(true));
  };

  const onModalCloseHandler = () => {
    dispatch(setIsModalLogoutOpen(false));
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
            <UserName>{username}</UserName>
            <Divider orientation="vertical" flexItem />
            <ExitButton onClick={onLogOutClickHandler}>
              <div>Exit</div>
            </ExitButton>
          </Box>
        </StyledToolbar>
      </Container>
      <ModalLogout open={isModalLogoutOpen} onClose={onModalCloseHandler} />
    </Header>
  );
};

export default AppBar;
