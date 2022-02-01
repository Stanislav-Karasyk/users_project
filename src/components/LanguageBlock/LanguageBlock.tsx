import styles from './LanguageBlock.module.scss';
import iconEn from '../../assets/icons/en.svg';
import iconRu from '../../assets/icons/ru.svg';
import { IParamsLanguage } from '../../interfaces/usersInterfaces';

function LanguageBlock({ onChangeLanguage }: IParamsLanguage) {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.flag}
        onClick={onChangeLanguage}
        data-language="en"
      >
        <img src={iconEn} alt="" />
      </button>
      <button
        className={styles.flag}
        onClick={onChangeLanguage}
        data-language="ru"
      >
        <img src={iconRu} alt="" />
      </button>
    </div>
  );
}

export default LanguageBlock;
