import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Path } from '../constants/path';
import { isAuthenticated } from '../redux/auth/authSelectors';

interface IProps {
  component: React.ComponentType;
  path?: string;
}

function PrivateRoute({ component: Component, path }: IProps) {
  const isLoggedIn = useSelector(isAuthenticated);

  path = path || Path.LOGIN;

  return isLoggedIn ? <Component /> : <Navigate to={path} />;
}

export default PrivateRoute;
