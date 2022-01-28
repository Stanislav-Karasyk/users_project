import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IUser } from '../../interfaces/usersInterfaces';
import { getUsers } from '../../redux/users/usersSelectors';
import styles from './UserInfo.module.scss';

function UserInfo() {
  const users = useSelector(getUsers);
  const { id } = useParams();

  const user = users.find(user => user.login.uuid === id) as IUser;

  return (
    <div className={`${styles.user} ${styles[user.gender]}`}>
      <img className={styles.avatar} src={user.picture.large} alt="" />
      <p className={styles.name}>{`${user.name.first} ${user.name.last}`}</p>
      <p className={styles.birthday}>{user.dob.date.slice(0, 10)}</p>
      <p className={styles.gender}>{user.gender}</p>
      <p className={styles.location}>{user.location.city}</p>
      <p className={styles.phone}>{user.phone}</p>
      <p className={styles.registeredDate}>
        {user.registered.date.slice(0, 10)}
      </p>
    </div>
  );
}

export default UserInfo;
