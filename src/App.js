import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MoneyExchangeTable } from 'components/SideMenu/MoneyExchangeTable';
import { useTheme } from '@mui/system';
import Spinner from 'components/Spinner';
import { useMediaQuery } from 'react-responsive';
import { ROUTES } from 'constants/routes';
import { getCurrentUser } from 'redux/userSlice';
import { PublicRoute, PrivateRoute } from 'components/Routes';

const DashBoardPage = lazy(() =>
  import(
    './pages/DashBoard/DashBoardPage' /* webpackChunkName: "dashboard-page" */
  )
);
const NotFoundPage = lazy(() =>
  import(
    './pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "not-found-page" */
  )
);
const Layout = lazy(() =>
  import('./components/Layout' /* webpackChunkName: "layout" */)
);
const StatisticPage = lazy(() =>
  import(
    './pages/StatisticsPage/StatisticsPage' /* webpackChunkName: "statistic-page" */
  )
);
const TeamPage = lazy(() =>
  import('./pages/TeamPage/TeamPage' /* webpackChunkName: "team-page" */)
);
const RegistrationPage = lazy(() =>
  import(
    './pages/RegistrationPage/RegistrationPage' /* webpackChunkName: "registration-page" */
  )
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */)
);

const App = () => {
  const dispatch = useDispatch();
  const { breakpoints } = useTheme();
  const isLoading = useSelector((state) => state.global.isLoading);
  const isSmallScreen = useMediaQuery({ maxWidth: breakpoints.values.tablet });

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path={ROUTES.MAIN}
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<DashBoardPage />} />
            <Route path={ROUTES.STATISTICS} element={<StatisticPage />} />
            <Route path={ROUTES.DEV} element={<TeamPage />} />
            <Route
              path={ROUTES.EXCHANGE_RATE}
              element={
                isSmallScreen ? (
                  <MoneyExchangeTable />
                ) : (
                  <Navigate to={ROUTES.MAIN} />
                )
              }
            />
          </Route>
          <Route
            path={ROUTES.REGISTRATION}
            element={
              <PublicRoute restricted={true}>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path={ROUTES.LOGIN}
            element={
              <PublicRoute restricted={true}>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path={ROUTES.NO_MATCH} element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {isLoading && <Spinner />}
    </div>
  );
};

export default App;
