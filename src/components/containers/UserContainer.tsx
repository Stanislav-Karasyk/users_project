import { NavLink } from 'react-router-dom';
import { Path } from '../../constants/path';
import { IParamsUser } from '../../interfaces/usersInterfaces';
import User from '../User/User';
import styles from '../../main.module.scss';

function UserContainer({ user }: IParamsUser) {
  return (
    <NavLink
      className={styles.navLink}
      to={`${Path.USER_INFO}/${user.login.uuid}`}
    >
      <User user={user} />
    </NavLink>
  );
}

export default UserContainer;
