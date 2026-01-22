import { useState } from "react";
import ThemeContext from "./theme-context";
import { useCallback } from "react";
import { GetLocalTheme } from "@/lib/get-local-theme";
import { useEffect } from "react";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(GetLocalTheme);

  const SwitchTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, SwitchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
