import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Path } from '../../constants/path';
import { isAuthenticated } from '../../redux/auth/authSelectors';

interface IProps {
  component: React.ComponentType;
}

function PublicRoute({ component: Component }: IProps) {
  const isLoggedIn = useSelector(isAuthenticated);

  return isLoggedIn ? <Navigate replace to={Path.USERS} /> : <Component />;
}

export default PublicRoute;
