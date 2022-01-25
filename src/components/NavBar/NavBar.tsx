import { NavLink } from 'react-router-dom';
import { Path } from '../../constants/path';
import styles from './NavBar.module.scss';
import logo from '../../assets/logoUsers.svg';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthenticated } from '../../redux/auth/authSelectors';
import { logoutRequest } from '../../redux/auth/authActions';

function NavBar() {
  const isLoggedIn = useSelector(isAuthenticated);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutRequest());
    localStorage.clear();
  };

  return (
    <nav className={styles.nav}>
      <NavLink to={Path.USERS}>
        <img src={logo} alt="" width="100" />
      </NavLink>

      {isLoggedIn && (
        <ul className={styles.list}>
          <li>
            <NavLink to={Path.USERS} className={styles.navLink}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to={Path.USER_INFO} className={styles.navLink}>
              User Info
            </NavLink>
          </li>
          <li>
            <NavLink to={Path.LOGIN} className={styles.navLink}>
              <button className={styles.logOutBtn} onClick={onLogout}>
                Log out
              </button>
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
