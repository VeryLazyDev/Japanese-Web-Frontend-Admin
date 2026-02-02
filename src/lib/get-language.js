export const getLanguage = () => {
    const localLang = localStorage.getItem("language");
    const localLangJson = JSON.parse(localLang);
    if (!localLang) {
        localStorage.setItem(
            "lang",
            JSON.stringify({ language: "English", code: "en" }),
        );
    }
    return localLangJson || { language: "English", code: "en" };
};
