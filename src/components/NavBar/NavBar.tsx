import { NavLink } from 'react-router-dom';
import { Path } from '../../constants/path';
import styles from './NavBar.module.scss';
import logo from '../../assets/logoUsers.svg';
import LanguageBlockContainer from '../containers/LanguageBlockContainer';
import { IParamsNavBar } from '../../interfaces/usersInterfaces';

function NavBar({ isLoggedIn, onLogout, t }: IParamsNavBar) {
  const setClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink}` + (isActive ? ` ${styles.navLinkActivated}` : '');

  return (
    <nav className={styles.nav}>
      <NavLink to={Path.USERS}>
        <img src={logo} alt="" width="100" />
      </NavLink>
      <LanguageBlockContainer />
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
