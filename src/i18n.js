import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

// import translationEN from "../public/locales/en/translation.json";
// import translationRU from "../public/locales/ru/translation.json";
// import translationKZ from "../public/locales/kz/translation.json";

const languages = ["us", "kz", "ru"];

i18n
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "ru",
    debug: true,
    whitelist: languages,

    backend: {
      loadPath: "locales/{{lng}}/translation.json",
    },

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
