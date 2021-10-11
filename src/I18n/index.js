import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import En from "./En.Source";

const resources = {
  en: En,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    defaultNS: "common",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
