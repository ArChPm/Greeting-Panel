import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';

const options = {
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  debug: false,
  keySeparator: false,
  interpolation: {
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
};

options.backend = {
  loadPath: '/locales/{{lng}}/{{ns}}.json',
};
i18n.use(XHR);

export default () => {
  i18n.init(options);
  return i18n;
};
