import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Path } from '../../constants/path';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';

const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const UsersPage = lazy(() => import('../../pages/UsersPage/UsersPage'));
const UserInfoPage = lazy(
  () => import('../../pages/UserInfoPage/UserInfoPage'),
);

function Main() {
  // const isLoggedIn = useSelector(isAuthenticated);
  return (
    <main>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route
            path={Path.LOGIN}
            element={<PublicRoute component={LoginPage} />}
          />
          <Route
            path={Path.USERS}
            element={<PrivateRoute component={UsersPage} />}
          />
          <Route
            path={Path.USER_INFO}
            element={<PrivateRoute component={UserInfoPage} />}
          />
          <Route
            path={Path.USER_ID}
            element={<PrivateRoute component={UserInfoPage} />}
          />

          <Route path="/" element={<Navigate replace to={Path.LOGIN} />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default Main;
