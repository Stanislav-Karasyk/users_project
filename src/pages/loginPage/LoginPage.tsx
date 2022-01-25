import { useDispatch } from 'react-redux';
import { loginRequest } from '../../redux/auth/authActions';
import styles from './LoginPage.module.scss';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = () => dispatch(loginRequest());

  return (
    <div className={styles.wrap}>
      <button className={styles.logInBtn} onClick={onLogin}>
        Log in
      </button>
    </div>
  );
}

export default LoginPage;
