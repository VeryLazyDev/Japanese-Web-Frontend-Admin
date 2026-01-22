import { createContext } from "react";

const ThemeContext = createContext({
  theme: "",
  SwitchTheme: () => {},
});

export default ThemeContext;
