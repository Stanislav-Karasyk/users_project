import { IParamsUsers } from '../../interfaces/usersInterfaces';
import UserContainer from '../containers/UserContainer';
import styles from './UserList.module.scss';

function UserList({ users }: IParamsUsers) {
  return (
    <ul className={styles.list}>
      {users.map((user, index) => (
        <li key={index}>
          <UserContainer user={user} />
        </li>
      ))}
    </ul>
  );
}

export default UserList;
