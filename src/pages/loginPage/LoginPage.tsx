import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../redux/auth/authActions';
import styles from './LoginPage.module.scss';

function LoginPage() {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const onLogin = useCallback(() => {
    dispatch(loginRequest());
  }, [dispatch]);

  return (
    <div className={styles.wrap}>
      <button className={styles.logInBtn} onClick={onLogin}>
        {t('log_in')}
      </button>
    </div>
  );
}

export default LoginPage;
