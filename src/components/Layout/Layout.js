import { AppBar } from 'components';
import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, clearState } from 'redux/userSlice';
import { Container } from 'components/common';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import SideMenu from 'components/SideMenu/SideMenu';
import { AppBackground } from 'components';
import { fetchUserBytoken } from 'redux/userSlice';

const Layout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { isFetching, isSuccess, isError } = useSelector(userSelector)

  useEffect(() => {
    if (isError) {
      dispatch(clearState())
      navigate("/login")
    }
  }, [isError])

  useEffect(() => {
    dispatch(fetchUserBytoken({ token: localStorage.getItem("token") }))
  }, [])


  return (
    <>
      {isSuccess ? (
        <>
          <AppBar />
          <Container
            sx={[
              theme => ({
                height: 'calc(100% - 77px)',
                position: 'relative',
                zIndex: 20,
                display: 'flex',
                justifyContent: 'space-between',
                [theme.breakpoints.down('desktop')]: {
                  padding: '0 30px',
                  flexDirection: 'column',
                  rowGap: '40px',
                  justifyContent: 'initial',
                  height: 'auto',
                },
                [theme.breakpoints.down('tablet')]: {
                  padding: '0 20px',
                },
              }),
            ]}
          >
            <Box
              sx={[
                theme => ({
                  paddingTop: '40px',
                  paddingRight: '30px',
                  height: '100%',
                  position: 'fixed',
                  [theme.breakpoints.down('desktop')]: {
                    padding: '20px 0 0 0',
                    width: '100%',
                    position: 'static',
                  },
                }),
              ]}
            >
              <SideMenu />
            </Box>
            <Box
              sx={[
                theme => ({
                  paddingLeft: '30px',
                  paddingTop: '30px',
                  paddingBottom: '30px',
                  width: '100%',
                  marginLeft: '355px',
                  [theme.breakpoints.down('desktop')]: {
                    padding: 0,
                    marginLeft: 0,
                  },
                }),
              ]}
            >
              <Outlet />
            </Box>
          </Container>
          <AppBackground />
        </>
      ) : (<div></div>)}

    </>
  );
};
export default Layout;
