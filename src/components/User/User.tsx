import { IParamsUser } from '../../interfaces/usersInterfaces';
import styles from './User.module.scss';

function User({ user }: IParamsUser) {
  return (
    <div className={`${styles.user} ${styles[user.gender]}`}>
      <img className={styles.avatar} src={user.picture.large} alt="" />
      <p className={styles.name}>{`${user.name.first} ${user.name.last}`}</p>
      <p className={styles.birthday}>{user.dob.date.slice(0, 10)}</p>
      <p className={styles.gender}>{user.gender}</p>
    </div>
  );
}

export default User;
