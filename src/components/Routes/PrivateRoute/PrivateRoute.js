import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTES } from 'constants/routes';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector((state) => state.user.isAuth);

  return isAuth ? (
    children
  ) : (
    <Navigate to={ROUTES.LOGIN} replace state={{ from: location }} />
  );
};

export default PrivateRoute;
