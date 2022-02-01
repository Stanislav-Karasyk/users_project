import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchUsersRequest } from '../../redux/users/usersActions';
import { getUsers } from '../../redux/users/usersSelectors';
import apiConfig from '../../services/api/apiConfig';
import UserList from '../UsersList/UserList';

function UserListContainer() {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const [searchParams, setSearchParams] = useSearchParams();
  const [fetching, setFetching] = useState(false);
  const currentPage = Number(searchParams.get('page'));

  useEffect(() => {
    if (users.length && currentPage) {
      return;
    }

    dispatch(fetchUsersRequest());
    setSearchParams(`page=${apiConfig.defaultFetch.page}`);
  }, [users.length, currentPage, dispatch, setSearchParams]);

  useEffect(() => {
    if (fetching) {
      dispatch(
        fetchUsersRequest({
          page: currentPage,
          results: apiConfig.newFetch.results,
        }),
      );
      setSearchParams(`page=${currentPage + 1}`);
      setFetching(false);
    }
  }, [fetching, dispatch, currentPage, setSearchParams]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  const scrollHandler = (event: Event) => {
    const target = (event.target as Document).documentElement;
    if (target.scrollHeight - (target.scrollTop + window.innerHeight) < 1) {
      setFetching(true);
    }
  };

  return <UserList users={users} />;
}

export default UserListContainer;
