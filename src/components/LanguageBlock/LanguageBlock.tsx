import i18next from 'i18next';
import styles from './LanguageBlock.module.scss';
import iconEn from '../../assets/icons/en.svg';
import iconRu from '../../assets/icons/ru.svg';

function LanguageBlock() {
  const onChangeLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
    const language = event.currentTarget.dataset.language;

    if (language === 'en') {
      i18next.changeLanguage(language);
    }

    if (language === 'ru') {
      i18next.changeLanguage(language);
    }
  };

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
