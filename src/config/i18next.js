import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enHome from "../constant/translation/en/home";
import mmHome from "../constant/translation/mm/home";
i18next.use(initReactI18next).init({
  resources: {
    en: {
      home: enHome,
    },
    mm: {
      home: mmHome,
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  supportedLngs: ["en", "mm"],
  ns: ["home"],
});
export default i18next;
