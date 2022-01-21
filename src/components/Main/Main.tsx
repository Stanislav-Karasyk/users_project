import { Navigate, Route, Routes } from 'react-router-dom';
import { Path } from '../../constants/path';
import LoginPage from '../../pages/LoginPage/LoginPage';
import UserInfoPage from '../../pages/UserInfoPage/UserInfoPage';
import UsersPage from '../../pages/UsersPage/UsersPage';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate replace to={Path.LOGIN} />} />

        <Route path={Path.LOGIN} element={<LoginPage />} />
        <Route path={Path.USERS} element={<UsersPage />} />
        <Route path={Path.USER_INFO} element={<UserInfoPage />} />
        <Route path={Path.USER_ID} element={<UserInfoPage />} />
      </Routes>
    </main>
  );
}

export default Main;
