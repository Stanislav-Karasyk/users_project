import { IUser } from '../../interfaces/usersInterfaces';
import styles from './UserInfo.module.scss';

function UserInfo({ user }: { user: IUser }) {
    
    console.log(user);

  return (
    <div>
      <img className={styles.avatar} src={user.picture.large} alt="" />
      <p className={styles.name}>{`${user.name.first} ${user.name.last}`}</p>
      <p className={styles.birthday}>{user.dob.date.slice(0, 10)}</p>
      <p className={styles.gender}>{user.gender}</p>
    </div>
  );
}

export default UserInfo;
