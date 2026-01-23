import { useTheme } from "@/hooks/useTheme";
import { getUserNavs } from "@/lib/get-user-nav";
import { MoonIcon, SunIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navs = getUserNavs();
  const { theme, SwitchTheme } = useTheme();
  return (
    <div className="w-full p-1.5 flex justify-center h-10 rounded bg-secondary-bg">
      <nav className="flex justify-around items-center w-full py-2">
        <h3 className="text-xl font-mono">MUDA-ZER0</h3>

        <div className="flex items-center gap-6">
          {navs.map((item) => (
            <NavLink to={item.route} key={item.id}>{item.name}</NavLink>
          ))}
        </div>

        <div className="bg-white rounded-full p-2" onClick={SwitchTheme}>
          {theme === "light" ? (
            <MoonIcon color="black" />
          ) : (
            <SunIcon color="black" />
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
