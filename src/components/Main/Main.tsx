import { Route, Routes } from 'react-router';
import { Path } from '../../constants/path';
import LoginPage from '../../pages/LoginPage/LoginPage';
import UserInfoPage from '../../pages/UserInfoPage/UserInfoPage';
import UsersPage from '../../pages/UsersPage/UsersPage';

function Main() {
  return (
    <main>
    <Routes>
      <Route path={Path.LOGIN} element={<LoginPage />} />
      <Route path={Path.USERS} element={<UsersPage />} />
      <Route path={Path.USER_INFO} element={<UserInfoPage />} />
    </Routes>
  </main>
  );
}

export default Main;
