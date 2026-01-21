import { getUserNavs } from "@/lib/get-user-nav";
import { SunIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navs = getUserNavs();

  return (
    <div className="w-full p-1.5 flex justify-center h-10 rounded bg-secondary-bg">
      <nav className="flex justify-around items-center w-full py-2">
        <h3 className="text-xl font-mono">MUDA-ZER0</h3>

        <div className="flex items-center gap-6">
          {navs.map((item) => (
            <NavLink key={item.id}>{item.name}</NavLink>
          ))}
        </div>

        <div className="bg-white rounded-full p-2">
          <SunIcon color="black" />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
