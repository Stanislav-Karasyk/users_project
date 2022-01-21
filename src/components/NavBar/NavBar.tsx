import { NavLink } from 'react-router-dom';
import { Path } from '../../constants/path';
import styles from './NavBar.module.scss';
import logo from '../../assets/logoUsers.svg';

function NavBar() {
  const isLoggedIn = true;
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <NavLink to={Path.USERS}>
            <img src={logo} alt="" width="100" />
          </NavLink>
        </li>
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
        {isLoggedIn && (
          <li>
            <NavLink to={Path.LOGIN} className={styles.navLink}>
              Log out
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
