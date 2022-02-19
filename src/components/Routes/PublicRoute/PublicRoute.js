import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTES } from 'constants/routes';

const PublicRoute = ({ children, restricted = false }) => {
  const location = useLocation();
  const isAuth = useSelector((state) => state.user.isAuth);
  const from = location.state?.from?.pathname || ROUTES.MAIN;

  return isAuth && restricted ? <Navigate to={from} replace /> : children;
};

export default PublicRoute;
