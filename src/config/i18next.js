import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enHome from "../constant/translation/en/home";
import mmHome from "../constant/translation/mm/home";
import mmLevelSelect from "../constant/translation/mm/level-select.json";
import enLevelSelect from "../constant/translation/en/level-select.json";
import mmReadingModule from "../constant/translation/mm/reading-module.json";
import enReadingModule from "../constant/translation/en/reading-module.json";
import mmMisc from "../constant/translation/mm/misc.json";
import enMisc from "../constant/translation/en/misc.json";
i18next.use(initReactI18next).init({
    resources: {
        en: {
            home: enHome,
            level: enLevelSelect,
            "reading-module": enReadingModule,
            misc: enMisc,
        },
        mm: {
            home: mmHome,
            level: mmLevelSelect,
            "reading-module": mmReadingModule,
            misc: mmMisc,
        },
    },
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    supportedLngs: ["en", "mm"],
    ns: ["home"],
    parseMissingKeyHandler: (key) => {
        const parts = key.split(".");
        return parts[parts.length - 1];
    },
});
export default i18next;
