import { useLocation } from 'react-router-dom';
import UserInfo from '../../components/UserInfo/UserInfo';
import { Path } from '../../constants/path';
import { IUser } from '../../interfaces/usersInterfaces';
import styles from './UserInfoPage.module.scss';

function UserInfoPage() {
  const location = useLocation();

  return (
    <>
      {location.pathname === Path.USER_INFO ? (
        <p className={styles.message}>
          "Select a user to see their information"
        </p>
      ) : (
        <UserInfo user={location.state as IUser} />
      )}
    </>
  );
}

export default UserInfoPage;
