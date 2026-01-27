import { createContext, useState } from "react";
import { useCallback } from "react";
import { GetLocalTheme } from "@/lib/get-local-theme";
import { useEffect } from "react";
import useAnimation from "@/hooks/useAnimation";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(GetLocalTheme);
    const { switchThemeAnimation } = useAnimation();

    const SwitchTheme = useCallback(() => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        // switchThemeAnimation(theme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme, switchThemeAnimation]);

    return (
        <ThemeContext.Provider value={{ theme, SwitchTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export { ThemeContext, ThemeProvider };
