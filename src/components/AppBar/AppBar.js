import { Box, Divider } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Logo } from 'components/common';
import { userSelector, clearState } from 'redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { StyledToolbar, Header, ExitButton, UserName } from './AppBar.styled';

const StyledAppBar = () => {
  const navigate = useNavigate();
  const { breakpoints } = useTheme();

  const dispatch = useDispatch();

  const { username } = useSelector(userSelector);

  const onLogOut = () => {
    // localStorage.removeItem("token")
    localStorage.clear();
    dispatch(clearState());
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
