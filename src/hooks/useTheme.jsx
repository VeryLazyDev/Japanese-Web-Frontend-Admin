import { ThemeContext } from "@/context/theme-provider";
import { useContext } from "react";

export const useTheme = () => {
    return useContext(ThemeContext);
};
