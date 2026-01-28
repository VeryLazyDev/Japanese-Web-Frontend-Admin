import { getUserNavs } from "@/lib/get-user-nav";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { logos } from "@/constant/user-home-modules";
import { useState } from "react";
import HamburgerMenu from "./hamburger-menu";
import LanguageToggle from "./launguage-toggle";
import ThemeToggle from "./theme-toggle";
import PullChain from "../pullchain/pullchain";

const Navbar = () => {
    const navs = getUserNavs();
    const navigate = useNavigate();
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () => {
        setToggleMenu(!toggleMenu);
    };

    return (
        <>
            <div className="fixed w-full p-1.5 flex justify-center h-14  bg-neutral-900 select-none z-100 ">
                <nav className="flex justify-between items-center w-90 sm:w-150 lg:w-250 py-2 px-4">
                    {/* logo */}
                    <img
                        onClick={() => navigate("/")}
                        src={logos.logoText}
                        alt=""
                        className="w-24 cursor-pointer"
                    />

                    {/* links */}
                    <div className="max-lg:hidden flex items-center gap-12 text-muted-font">
                        {navs.map((item) => (
                            <NavLink
                                className={({ isActive }) =>
                                    `text-sm transition-colors duration-200 ${isActive ? "text-white" : "hover:text-white"}`
                                }
                                to={item.route}
                                key={item.id}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* language & theme */}
                    <div className="max-lg:hidden flex justify-between items-center gap-3">
                        <LanguageToggle size={20}></LanguageToggle>
                        <ThemeToggle size={20}></ThemeToggle>
                    </div>

                    {/* menu-toggle */}
                    {toggleMenu ? (
                        <X
                            onClick={() => handleToggle()}
                            size={20}
                            className="lg:hidden text-white cursor-pointer"
                        />
                    ) : (
                        <Menu
                            onClick={() => handleToggle()}
                            size={20}
                            className="lg:hidden text-white cursor-pointer"
                        />
                    )}
                </nav>
            </div>
            <HamburgerMenu toggle={toggleMenu} setToggle={setToggleMenu} />
            <PullChain />
        </>
    );
};
export default Navbar;
