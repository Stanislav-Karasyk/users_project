import { IUser } from '../../interfaces/usersInterfaces';
import styles from './User.module.scss';

interface IProps {
  user: IUser;
}

function User({ user }: IProps) {
  return (
    <li className={styles.user}>
      {/* <NavLink
        className={styles}
        to={`${navConfig.userInfo.path}/${user.login.uuid}`}
        state={user}
      > */}
      <img
        className={styles.avatar}
        src={user.picture.large}
        alt=""
        //   width="130"
        //   height="130"
      />
      <p className={styles.name}>{`${user.name.first} ${user.name.last}`}</p>
      <p className={styles.birthday}>{user.dob.date}</p>
      <p className={styles.gender}>{user.gender}</p>
      {/* </NavLink> */}
    </li>
  );
}

export default User;
