import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from '../../redux/auth/authActions';
import { isAuthenticated } from '../../redux/auth/authSelectors';
import NavBar from '../NavBar/NavBar';

function NavBarContainer() {
  const isLoggedIn = useSelector(isAuthenticated);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onLogout = useCallback(() => {
    dispatch(logoutRequest());

    localStorage.clear();
  }, [dispatch]);

  return <NavBar isLoggedIn={isLoggedIn} onLogout={onLogout} t={t} />;
}

export default NavBarContainer;
