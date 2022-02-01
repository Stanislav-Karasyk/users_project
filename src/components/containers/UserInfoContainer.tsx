import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IUser } from '../../interfaces/usersInterfaces';
import { getUsers } from '../../redux/users/usersSelectors';
import UserInfo from '../UserInfo/UserInfo';

function UserInfoContainer() {
  const users = useSelector(getUsers);
  const { id } = useParams();

  const user = useMemo(
    () => users.find(user => user.login.uuid === id) as IUser,
    [id, users],
  );

  return <UserInfo user={user} />;
}

export default UserInfoContainer;
