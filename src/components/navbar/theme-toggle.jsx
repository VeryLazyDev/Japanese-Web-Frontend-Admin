import useAnimation from "@/hooks/useAnimation";
import { useTheme } from "@/hooks/useTheme";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect } from "react";

const ThemeToggle = ({ size }) => {
  const { theme, SwitchTheme } = useTheme();
  const { switchThemeAnimation } = useAnimation();
  useEffect(() => {
    switchThemeAnimation(theme);
  }, [theme, switchThemeAnimation]);
  return (
    <>
      <div
        className="bg-neutral-800  rounded-full cursor-pointer relative p-2 w-9 h-9 flex items-center justify-center"
        onClick={SwitchTheme}
      >
        <MoonIcon
          ize={size}
          className="text-neutral-300 absolute dark-switch"
        />
        <SunIcon
          size={size}
          className="text-neutral-300  absolute light-switch"
        />
      </div>
    </>
  );
};

export default ThemeToggle;
