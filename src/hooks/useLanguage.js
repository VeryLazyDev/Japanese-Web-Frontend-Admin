import { LanguageContext } from "@/context/language-provider";
import { useContext } from "react";

export const useLanguage = () => useContext(LanguageContext);
