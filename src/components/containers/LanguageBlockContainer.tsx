import i18next from 'i18next';
import React from 'react';
import LanguageBlock from '../LanguageBlock/LanguageBlock';

function LanguageBlockContainer() {
  const onChangeLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
    const language = event.currentTarget.dataset.language;

    if (language === 'en') {
      i18next.changeLanguage(language);
    }

    if (language === 'ru') {
      i18next.changeLanguage(language);
    }
  };

  return <LanguageBlock onChangeLanguage={onChangeLanguage} />;
}

export default LanguageBlockContainer;
