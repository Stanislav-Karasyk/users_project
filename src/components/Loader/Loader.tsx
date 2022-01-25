import { Grid } from 'react-loader-spinner';
import styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={styles.backdrop}>
      <Grid color="rgb(0, 191, 255)" ariaLabel="loading" />
    </div>
  );
}

export default Loader;
