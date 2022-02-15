import { AppBar, AppBackground, SideMenu } from 'components';
import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, clearState } from 'redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { fetchUserBytoken } from 'redux/userSlice';
import * as S from './Layout.style';

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, isSuccess, isError } = useSelector(userSelector);

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      navigate('/login');
    }
  }, [isError, dispatch, navigate]);

  useEffect(() => {
    dispatch(fetchUserBytoken({ token: localStorage.getItem('token') }));
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <S.AppContainer>
        <S.Aside>
          <SideMenu />
        </S.Aside>
        <S.Main>
          <Outlet />
        </S.Main>
      </S.AppContainer>
      <AppBackground />
    </>
  );
};
export default Layout;
