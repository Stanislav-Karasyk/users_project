import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Path } from '../../constants/path';
import styles from './NavBar.module.scss';
import logo from '../../assets/logoUsers.svg';
import { isAuthenticated } from '../../redux/auth/authSelectors';
import { logoutRequest } from '../../redux/auth/authActions';
import LanguageBlock from '../LanguageBlock/LanguageBlock';
import { useCallback } from 'react';

function NavBar() {
  const isLoggedIn = useSelector(isAuthenticated);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onLogout = useCallback(() => {
    dispatch(logoutRequest());
    localStorage.clear();
  }, [dispatch]);

  const setClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink}` + (isActive ? ` ${styles.navLinkActivated}` : '');

  return (
    <nav className={styles.nav}>
      <NavLink to={Path.USERS}>
        <img src={logo} alt="" width="100" />
      </NavLink>
      <LanguageBlock />
      {isLoggedIn && (
        <ul className={styles.list}>
          <li>
            <NavLink end to={Path.USERS} className={setClass}>
              {t('users')}
            </NavLink>
          </li>
          <li>
            <NavLink to={Path.USER_INFO} className={setClass}>
              {t('user_info')}
            </NavLink>
          </li>
          <li>
            <NavLink to={Path.LOGIN} className={styles.navLink}>
              <button className={styles.logOutBtn} onClick={onLogout}>
                {t('log_out')}
              </button>
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
