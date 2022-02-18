import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RequireAuth({ children }) {
  const location = useLocation();
  //   console.log(location.pathname);

  const { isAuth } = useSelector(state => state.user);
  console.log(isAuth);
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}
