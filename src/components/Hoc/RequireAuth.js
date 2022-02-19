import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTES } from 'constants/routes';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector((state) => state.user.isAuth);

  return isAuth ? (
    children
  ) : (
    <Navigate to={ROUTES.LOGIN} replace state={{ from: location }} />
  );
};

export const PublicRoute = ({ children, restricted = false }) => {
  const location = useLocation();
  const isAuth = useSelector((state) => state.user.isAuth);
  const from = location.state?.from?.pathname || ROUTES.MAIN;

  return isAuth && restricted ? <Navigate to={from} replace /> : children;
};
