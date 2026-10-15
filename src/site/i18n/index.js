import { useContext } from 'react';
import appContext from '../../AppProvider';
import { translations as rawTranslations } from './translations';
import { deepPreventOrphanedPunctuation } from '../utils/preventOrphanedPunctuation';

const translations = deepPreventOrphanedPunctuation(rawTranslations);

export const useTranslation = () => {
  const { currentLang } = useContext(appContext);
  const t = translations[currentLang] || translations.fr;

  return { t, currentLang };
};

export { translations };
