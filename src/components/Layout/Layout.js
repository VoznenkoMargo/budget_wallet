import { AppBar, AppBackground, SideMenu } from 'components';
import { Outlet } from 'react-router-dom';
import * as S from './Layout.style';

const Layout = () => {
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
      <AppBackground blured />
    </>
  );
};
export default Layout;
