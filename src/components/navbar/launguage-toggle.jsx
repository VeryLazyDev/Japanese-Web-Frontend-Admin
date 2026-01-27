import { Globe } from "lucide-react";


const LanguageToggle = ({size}) => {
    return (
        <>
            <div className="w-auto h-full flex items-center gap-3">
                <h1 className="text-sm text-muted-font">English</h1>
                <span className="bg-neutral-800  rounded-full  p-2 cursor-pointer">
                    <Globe size={size} className="text-neutral-300" ></Globe>
                </span>
            </div>
        </>
    )
}

export default LanguageToggle;