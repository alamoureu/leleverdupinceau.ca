import { useContext } from 'react';
import appContext from '../../AppProvider';
import { translations } from './translations';

export const useTranslation = () => {
  const { currentLang } = useContext(appContext);
  const t = translations[currentLang] || translations.fr;

  return { t, currentLang };
};

export { translations };
