import { DockPages } from "@/constant/layout_constants";
import { useEffect, useState } from "react";
import DockBtn from "./dock_btn";
import { useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import useAnimation from "@/hooks/useAnimation";
// import { Lightbulb } from "lucide-react";
// import { MdLightbulb, MdOutlineLightbulb } from "react-icons/md";

const Dock = () => {
  const [currentFocus, setCurrentFocus] = useState(1);
  const location = useLocation();
  const { theme, SwitchTheme } = useTheme();
  const { switchThemeAnimation } = useAnimation();
  useEffect(() => {
    switchThemeAnimation(theme);
    const updateCurrentFocus = () => {
      setCurrentFocus(2);
    };
    if (location.pathname === "/admin/login") {
      updateCurrentFocus;
    }
  }, [location, switchThemeAnimation, theme]);

  return (
    <div className="p-1 w-fit h-fit border-light-bg border rounded-md gap-1 absolute bottom-3/6 left-5">
      <div
        className={`bg-primary/80 calc() w-11 h-11 absolute rounded z-0 transition-all`}
        style={{
          transform: `translateY(calc(var(--spacing) * 11 * ${currentFocus - 1}))`,
        }}
      />
      {DockPages.map((item) => (
        <DockBtn
          pageName={item.pageName}
          route={item.route}
          onClick={() => setCurrentFocus(item.id)}
          currentFocus={currentFocus}
          key={item.id}
          icon={item.icon}
          id={item.id}
        />
      ))}
      {/* <MdOutlineLightbulb />*/}
      <button
        onClick={SwitchTheme}
        className={`w-11 h-11 flex items-center justify-center bg-neutral-800 rounded`}
      >
        <Sun className={`absolute light-switch text-neutral-200`} />
        <Moon className={`absolute dark-switch text-neutral-200`} />
      </button>
    </div>
  );
};
export default Dock;
