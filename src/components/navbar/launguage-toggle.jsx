import { useLanguage } from "@/hooks/useLanguage";
import { Globe } from "lucide-react";
const LanguageToggle = ({ size }) => {
    const { handleLanguageChange, lang } = useLanguage();
    return (
        <>
            <div className="w-auto h-full flex items-center gap-3">
                <h1 className="text-sm text-muted-font">{lang.language}</h1>
                <span
                    className="bg-neutral-800  rounded-full  p-2 cursor-pointer"
                    onClick={handleLanguageChange}
                >
                    <Globe size={size} className="text-neutral-300"></Globe>
                </span>
            </div>
        </>
    );
};

export default LanguageToggle;
