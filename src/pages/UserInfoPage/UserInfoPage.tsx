import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import UserInfo from '../../components/UserInfo/UserInfo';
import { Path } from '../../constants/path';
import styles from './UserInfoPage.module.scss';
import { getUsers } from '../../redux/users/usersSelectors';
import { useSelector } from 'react-redux';

function UserInfoPage() {
  const location = useLocation();
  const { t } = useTranslation();
  const users = useSelector(getUsers);

  return (
    <>
      {location.pathname === Path.USER_INFO || users.length === 0 ? (
        <p className={styles.message}>{t('message_UserInfoPage')}</p>
      ) : (
        <UserInfo />
      )}
    </>
  );
}

export default UserInfoPage;
