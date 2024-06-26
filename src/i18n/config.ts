import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import enDictionary from './en/translation.json';
import frDictionary from './fr/translation.json';

i18next.use(initReactI18next).init({
  lng: 'fr',
  debug: true,
  resources: {
    en: {
      translation: enDictionary,
    },
    fr: {
      translation: frDictionary,
    },
  },
});
