import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../../redux/users/usersActions';
import { getUsers } from '../../redux/users/usersSelectors';
import User from '../User/User';
import styles from './UserList.module.scss';

function UserList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const users = useSelector(getUsers);

  return (
    <ul className={styles.list}>
      {users.map(user => (
        <User key={user.login.uuid} user={user} />
      ))}
    </ul>
  );
}

export default UserList;
