import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { MoneyExchangeTable } from 'components/SideMenu/MoneyExchangeTable';
import { useTheme } from '@mui/system';
import Spinner from 'components/Spinner';
import { useMediaQuery } from 'react-responsive';

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
  const { isLoading } = useSelector((state) => state.global);
  const { breakpoints } = useTheme();
  const isSmallScreen = useMediaQuery({ maxWidth: breakpoints.values.tablet });

  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashBoardPage />} />
            <Route path="statistic" element={<StatisticPage />} />
            <Route path="dev" element={<TeamPage />} />
            {isSmallScreen ? (
              <Route path="exchange-rate" element={<MoneyExchangeTable />} />
            ) : (
              <Route path="exchange-rate" element={<Navigate to="/" />} />
            )}
          </Route>
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {isLoading && <Spinner />}
    </div>
  );
};

export default App;
