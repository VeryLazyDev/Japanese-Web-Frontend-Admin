export const getLanguage = () => {
  const lang = localStorage.getItem("lang");
  if (!lang) {
    localStorage.setItem(
      "lang",
      JSON.stringify({ language: "English", code: "en" }),
    );
  }
  return lang || { language: "English", code: "en" };
};
