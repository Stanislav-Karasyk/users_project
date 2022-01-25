import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import UserInfo from '../../components/UserInfo/UserInfo';
import { Path } from '../../constants/path';
import { IUser } from '../../interfaces/usersInterfaces';
import styles from './UserInfoPage.module.scss';

function UserInfoPage() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <>
      {location.pathname === Path.USER_INFO ? (
        <p className={styles.message}>{t('message_UserInfoPage')}</p>
      ) : (
        <UserInfo user={location.state as IUser} />
      )}
    </>
  );
}

export default UserInfoPage;
