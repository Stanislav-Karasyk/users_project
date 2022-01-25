import i18next from 'i18next';
import styles from './LanguageBlock.module.scss';
import iconEn from '../../assets/icons/en.svg';
import iconRu from '../../assets/icons/ru.svg';

function LanguageBlock() {
  const changeLanguage = (language: string) => {
    i18next.changeLanguage(language);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.flag} onClick={() => changeLanguage('en')}>
        <img src={iconEn} alt="" />
      </button>
      <button className={styles.flag} onClick={() => changeLanguage('ru')}>
        <img src={iconRu} alt="" />
      </button>
    </div>
  );
}

export default LanguageBlock;
