import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

// import translationRU from "./locales/ru/translation.json";
// import translationEN from "./locales/en/translation.json";
// import translationKZ from "./locales/kz/translation.json";

// const resources = {
//   en: {
//     translation: translationEN,
//   },
//   kz: {
//     translation: translationKZ,
//   },
//   ru: {
//     translation: translationRU,
//   },
// };

i18n
  // .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        mainHeading: {
          key: "Lorem ipsum dolor sit amet",
        },
        description: {
          key: "Lorem ipsum dolor sit amet consectetur. Id malesuada suspendisse sagittis urna tortor. Placerat velit in habitant sit. Interdum at donec donec dui scelerisque morbi dolor.",
        },
        mainButton: {
          key: "Become spokesman",
        },
        aboutJintropine: {
          key: "More",
        },
        linkMain: {
          key: "Main",
        },
        linkVerification: {
          key: "Verification",
        },
        contactButton: {
          key: "Contact with us",
        },
        aboutHeading: {
          key: "What is jintropin",
        },
        aboutText: {
          key: "Lorem ipsum dolor sit amet consectetur. Id malesuada suspendisse sagittis urna tortor. Placerat velit in habitant sit. Interdum at donec donec dui scelerisque morbi dolor.",
        },
        moreInfo: {
          key: "Learn More About Product",
        },
        usefulHeading: {
          key: "How is it useful?",
        },
        immHeading: {
          key: "Immunity",
        },
        immParagraph: {
          key: "Lorem ipsum dolor sit amet consectetur. Id malesuada",
        },
        muscleHeading: {
          key: "Muscle Growth",
        },
        muscleParagraph: {
          key: "Lorem ipsum dolor sit amet consectetur. Id malesuada",
        },
        powerHeading: {
          key: "Strength",
        },
        powerParagraph: {
          key: "Lorem ipsum dolor sit amet consectetur. Id malesuada",
        },
        contactsHeading: {
          key: "Contact With Us",
        },
        sectionHeading: {
          key: "Contact With Spokesman In Your City!",
        },
        sectionParagraph: {
          key: "Lorem ipsum dolor sit amet consectetur. Id malesuada suspendisse sagittis urna tortor. Placerat velit in habitant sit. Interdum at donec donec dui scelerisque morbi dolor.",
        },
        submitButton: {
          key: "SEND FORM",
        },
        contactsHeaderMob: {
          key: "CONTACTS",
        },
        footerParagraph: {
          key: "Want to become a spokesman?",
        },
        contactUs: {
          key: "Contact with us by email:",
        },
        underline: {
          key: "sales@jintropine.com",
        },
        footerHeader: {
          key: "NAVIGATION",
        },
        mainLink: {
          key: "Main",
        },
        linkVerificationMob: {
          key: "Verification",
        },
        upperButton: {
          key: "Go Up",
        },
      },

      ru: {
        mainHeading: {
          key: "Значимость этих проблем настолько",
        },
        description: {
          key: "Значимость этих проблем настолько очевидна, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития.",
        },
        mainButton: {
          key: "Стать Представителем",
        },
        aboutJintropine: {
          key: "Подробнее",
        },
        linkMain: {
          key: "Главная",
        },
        linkVerification: {
          key: "Провекра на подлинность",
        },
        contactButton: {
          key: "Связаться с нами",
        },
        aboutHeading: {
          key: "Что такое джинтропин",
        },
        aboutText: {
          key: "Значимость этих проблем настолько очевидна, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития.",
        },
        moreInfo: {
          key: "узнать больше о продукте",
        },
        usefulHeading: {
          key: "Чем он полезен?",
        },
        immHeading: {
          key: "Иммунитет",
        },
        immParagraph: {
          key: "Значимость этих проблем настолько очевидна, что новая модель организационной",
        },
        muscleHeading: {
          key: "Рост Мышц",
        },
        muscleParagraph: {
          key: "Значимость этих проблем настолько очевидна, что новая модель организационной",
        },
        powerHeading: {
          key: "Сила",
        },
        powerParagraph: {
          key: "Значимость этих проблем настолько очевидна, что новая модель организационной",
        },
        contactsHeading: {
          key: "Связаться с нами",
        },
        sectionHeading: {
          key: "Свяжитесь с представителем в своем городе!",
        },
        sectionParagraph: {
          key: "Значимость этих проблем настолько очевидна, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития.",
        },
        submitButton: {
          key: "ОТПРАВИТЬ ЗАЯВКУ",
        },
        contactsHeaderMob: {
          key: "КОНТАКТЫ",
        },
        footerParagraph: {
          key: "Хотите стать представителемв вашем регионе?",
        },
        contactUs: {
          key: "Свяжитесь с нами по электронной почте:",
        },
        underline: {
          key: "sales@jintropine.com",
        },
        footerHeader: {
          key: "НАВИГАЦИЯ",
        },
        mainLink: {
          key: "Главная",
        },
        linkVerificationMob: {
          key: "Проверка на подлинность",
        },
        upperButton: {
          key: "Подняться вверх",
        },
      },

      kz: {
        mainHeading: {
          key: "Бұл проблемалардың маңыздылығы",
        },
        description: {
          key: "Бұл проблемалардың маңыздылығы соншалық, ұйымдық қызметтің жаңа моделі одан әрі даму бағыттарын қалыптастыруға (мамандардың) кең ауқымды қатысуын қамтамасыз етеді.",
        },
        mainButton: {
          key: "Өкіл болыңыз",
        },
        aboutJintropine: {
          key: "Көбірек",
        },
        linkMain: {
          key: "үй",
        },
        linkVerification: {
          key: "Шынайылығын тексеріңіз",
        },
        contactButton: {
          key: "Бізбен байланысыңыз",
        },
        aboutHeading: {
          key: "Джинтропин дегеніміз не",
        },
        aboutText: {
          key: "Бұл проблемалардың маңыздылығы соншалық, ұйымдық қызметтің жаңа моделі одан әрі даму бағыттарын қалыптастыруға (мамандардың) кең ауқымды қатысуын қамтамасыз етеді.",
        },
        moreInfo: {
          key: "өнім туралы көбірек біліңіз",
        },
        usefulHeading: {
          key: "Неліктен пайдалы?",
        },
        immHeading: {
          key: "Иммунитет",
        },
        immParagraph: {
          key: "Бұл проблемалардың маңыздылығы соншалықты айқын, сондықтан жаңа үлгідегі ұйымдастырушылық",
        },
        muscleHeading: {
          key: "Бұлшықет өсуі",
        },
        muscleParagraph: {
          key: "Бұл проблемалардың маңыздылығы соншалықты айқын, сондықтан жаңа үлгідегі ұйымдастырушылық",
        },
        powerHeading: {
          key: "Күш",
        },
        powerParagraph: {
          key: "Бұл проблемалардың маңыздылығы соншалықты айқын, сондықтан жаңа үлгідегі ұйымдастырушылық",
        },
        contactsHeading: {
          key: "Бізбен байланысыңыз",
        },
        sectionHeading: {
          key: "Өз қалаңыздағы өкілге хабарласыңыз!",
        },
        sectionParagraph: {
          key: "Бұл проблемалардың маңыздылығы соншалық, ұйымдық қызметтің жаңа моделі одан әрі даму бағыттарын қалыптастыруға (мамандардың) кең ауқымды қатысуын қамтамасыз етеді.",
        },
        submitButton: {
          key: "СҰРАНЫС ЖІБЕРУ",
        },
        contactsHeaderMob: {
          key: "БАЙЛАНЫСТАР",
        },
        footerParagraph: {
          key: "Өз аймағыңыздағы өкіл болғыңыз келе ме?",
        },
        contactUs: {
          key: "Электрондық пошта арқылы бізге хабарласыңыз:",
        },
        underline: {
          key: "sales@jintropine.com",
        },
        footerHeader: {
          key: "НАВИГАЦИЯ",
        },
        mainLink: {
          key: "үй",
        },
        linkVerificationMob: {
          key: "Шынайылығын тексеріңіз",
        },
        upperButton: {
          key: "Жоғары көтерілу",
        },
      },
    },

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    // backend: {
    //   loadPath: "locales/{{lng}}/translation.json",
    // },
  });

export default i18n;
