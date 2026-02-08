import { DockPages } from "@/constant/layout_constants";
import { useEffect, useState } from "react";
import DockBtn from "./dock_btn";
import { useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import useAnimation from "@/hooks/useAnimation";

const Dock = () => {
  const [currentFocus, setCurrentFocus] = useState(1);
  const location = useLocation();
  const { theme, SwitchTheme } = useTheme();
  const { switchThemeAnimation } = useAnimation();
  useEffect(() => {
    switchThemeAnimation(theme);
    const updateCurrentFocus = () => {
      const Index = DockPages.findIndex(
        (item) =>
          item.route === location.pathname ||
          item.route + "/" === location.pathname,
      );
      setCurrentFocus(Index + 1);
    };
    updateCurrentFocus();
    // switch (location.pathname) {
    //   case "/admin/login":
    //     updateCurrentFocus(2);
    //     break;
    //   case "/admin":
    //     updateCurrentFocus(1);
    //     break;
    //   case "/admin/settings":
    //     updateCurrentFocus(3);
    //     break;
    //   default:
    //     updateCurrentFocus(1);
    // }
  }, [location, switchThemeAnimation, theme]);

  return (
    <div className="p-1 w-fit h-fit border-light-bg border rounded-md gap-1 fixed bottom-3/6 left-5 max-md:hidden z-100 bg-primary-bg shadow">
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
          currentFocus={currentFocus}
          key={item.id}
          icon={item.icon}
          id={item.id}
        />
      ))}
      {/* <MdOutlineLightbulb />*/}
      <button
        onClick={SwitchTheme}
        className={`w-11 h-11 flex items-center justify-center bg-neutral-800 rounded md:hidden`}
      >
        <Sun className={`absolute light-switch text-neutral-200`} />
        <Moon className={`absolute dark-switch text-neutral-200`} />
      </button>
    </div>
  );
};
export default Dock;
