import { IParamsLogin } from '../../interfaces/usersInterfaces';
import styles from './Login.module.scss';

function Login({ onLogin, t }: IParamsLogin) {
  return (
    <div className={styles.wrap}>
      <button className={styles.logInBtn} onClick={onLogin}>
        {t('log_in')}
      </button>
    </div>
  );
}

export default Login;
