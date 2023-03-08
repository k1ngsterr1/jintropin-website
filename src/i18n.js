import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import translationRU from "./locales/russian/translation.json";
import translationEN from "./locales/english/translation.json";
import translationKZ from "./locales/russian/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  kz: {
    translation: translationKZ,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "ru",
    debug: true,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
