import { AppBar, AppBackground, SideMenu } from 'components';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from './Layout.style';

const Layout = () => {
  const { isAuth } = useSelector(state => state.user);

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
