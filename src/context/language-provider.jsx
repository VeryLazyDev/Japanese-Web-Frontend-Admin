import { getLanguage } from "@/lib/get-language";
import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const LanguageContext = createContext({});
const LanguageProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(getLanguage);
    const handleLanguageChange = () => {
        const language = lang.code === "en" ? "မြန်မာ" : "English";
        const code = lang.code === "en" ? "mm" : "en";
        localStorage.setItem("language", JSON.stringify({ language, code }));
        setLang({ language, code });
    };
    useEffect(() => {
        i18n.changeLanguage(lang.code);
    }, [lang, i18n]);
    return (
        <LanguageContext.Provider value={{ handleLanguageChange, lang }}>
            {children}
        </LanguageContext.Provider>
    );
};
export { LanguageContext, LanguageProvider };
