import { Box, Divider } from '@mui/material';
import { useTheme } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Logo } from 'components/common';
import { clearState } from 'redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { StyledToolbar, Header, ExitButton, UserName } from './AppBar.styled';
import { ROUTES } from 'constants/routes';
import { resetTransactionState } from 'redux/transactionSlice';

const StyledAppBar = () => {
  const navigate = useNavigate();
  const { breakpoints } = useTheme();
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.user.user);

  const onLogOut = () => {
    dispatch(clearState());
    dispatch(resetTransactionState());
    navigate(ROUTES.LOGIN);
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
            <ExitButton onClick={onLogOut}>
              <div>Exit</div>
            </ExitButton>
          </Box>
        </StyledToolbar>
      </Container>
    </Header>
  );
};

export default StyledAppBar;
