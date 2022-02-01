import { IParamsWrapper } from '../../interfaces/usersInterfaces';
import styles from './Wrapper.module.scss';

const Wrapper = ({ children }: IParamsWrapper) => (
  <div className={styles.wrapper}>{children}</div>
);

export default Wrapper;
