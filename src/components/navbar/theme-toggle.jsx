import { useTheme } from "@/hooks/useTheme";
import { MoonIcon, SunIcon } from "lucide-react";


const ThemeToggle = ({size}) => {
    const { theme, SwitchTheme } = useTheme();
    return (
        <>
            <div className="bg-neutral-800  rounded-full  p-2 cursor-pointer" onClick={SwitchTheme}>
                {theme === "light" ? (
                    <MoonIcon id="light" size={size} className="text-neutral-300" />
                ) : (
                    <SunIcon id="dark" size={size} className="text-neutral-300" />
                )}
            </div>
        </>
    )
}

export default ThemeToggle;