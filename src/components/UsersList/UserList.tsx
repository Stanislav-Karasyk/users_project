import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchUsersRequest } from '../../redux/users/usersActions';
import { getUsers } from '../../redux/users/usersSelectors';
import User from '../User/User';
import styles from './UserList.module.scss';

function UserList() {
  const dispatch = useDispatch();

  const users = useSelector(getUsers);

  const [searchParams, setSearchParams] = useSearchParams();

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  useEffect(() => {
    if (fetching) {
      let page = Number(searchParams.get('page'));
      page += 1;

      dispatch(fetchUsersRequest({ page, results: 10 }));
      setSearchParams(`page=${page}`);
      setFetching(false);
    }
  }, [fetching, dispatch, searchParams, setSearchParams]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  const scrollHandler = (event: Event) => {
    const target = (event.target as Document).documentElement;

    if (target.scrollHeight - (target.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  };

  return (
    <ul className={styles.list}>
      {users.map(user => (
        <User key={user.login.uuid} user={user} />
      ))}
    </ul>
  );
}

export default UserList;
