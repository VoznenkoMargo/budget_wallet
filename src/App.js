import './App.css';
import ThemeConfig from 'theme';
import { Route, Routes } from 'react-router-dom';

import { Suspense } from 'react';
import Spinner from 'components/Spinner';
import { lazy,  } from 'react';

const DashBoardPage = lazy(() => import('./pages/DashBoard/DashBoardPage'/* webpackChunkName: "dashboard-page" */));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'/* webpackChunkName: "not-found-page" */));
const Layout = lazy(() => import('./components/Layout'/* webpackChunkName: "layout" */));
const StatisticPage = lazy(() => import('./pages/StatisticsPage/StatisticsPage'/* webpackChunkName: "statistic-page" */));
const TeamPage = lazy(() => import('./pages/TeamPage/TeamPage'/* webpackChunkName: "team-page" */));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'/* webpackChunkName: "registration-page" */));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'/* webpackChunkName: "login-page" */));


const App = () => {
 
  return (
    <ThemeConfig>
      <div className="App">
        {/* {loading === true ? <Spinner/>: <h1>hello</h1>} */}
          <Suspense fallback={<Spinner/>}>
        <Routes>
        
        
          <Route path="/" element={<Layout/>}>
            <Route index element={<DashBoardPage />} />
            <Route path="main" element={<DashBoardPage />} />
            <Route path="statistic" element={<StatisticPage />} />
            <Route path="dev" element={<TeamPage />} />
          </Route>
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
            
          </Suspense>
      </div>
    </ThemeConfig>
  );
};

export default App;


