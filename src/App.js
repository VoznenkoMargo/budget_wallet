import './App.css';
import ThemeConfig from 'theme';

import { Route, Routes } from 'react-router-dom';
import DashBoardPage from 'pages/DashBoard/DashBoardPage';

import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import Layout from 'components/Layout';
import StatisticPage from 'pages/StatisticsPage/StatisticsPage';
import TeamPage from 'pages/TeamPage/TeamPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import LoginPage from 'pages/LoginPage/LoginPage';

const App = () => {
  return (
    <ThemeConfig>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashBoardPage />} />
            <Route path="main" element={<DashBoardPage />} />
            <Route path="statistic" element={<StatisticPage />} />
            <Route path="dev" element={<TeamPage />} />
          </Route>
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </ThemeConfig>
  );
};

export default App;
