import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../redux/auth/authActions';
import Login from '../Login/Login';

function LoginContainer() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onLogin = useCallback(() => {
    dispatch(loginRequest());
  }, [dispatch]);

  return <Login onLogin={onLogin} t={t} />;
}

export default LoginContainer;
