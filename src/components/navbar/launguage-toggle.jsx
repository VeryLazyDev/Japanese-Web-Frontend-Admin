import { getLanguage } from "@/lib/get-language";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = ({ size }) => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(getLanguage);
  // const handleLanguageChange = () => {
  //   const language = lang.code === "en" ? "မြန်မာ" : "English";
  //   const code = lang.code === "en" ? "mm" : "en";
  //   setLang({ language, code });
  // };

  // useEffect(() => {
  //   console.log(lang);
  //   localStorage.setItem(
  //     "language",
  //     JSON.stringify({ language: lang.language, code: lang.code }),
  //   );
  //   i18n.changeLanguage(lang.code);
  // }, [lang, i18n]);
  return (
    <>
      <div className="w-auto h-full flex items-center gap-3">
        <h1 className="text-sm text-muted-font">{lang.language}</h1>
        <span
          className="bg-neutral-800  rounded-full  p-2 cursor-pointer"
          // onClick={handleLanguageChange}
        >
          <Globe size={size} className="text-neutral-300"></Globe>
        </span>
      </div>
    </>
  );
};

export default LanguageToggle;
