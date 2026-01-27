import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserNavs } from "@/lib/get-user-nav";
import LanguageToggle from "./launguage-toggle";
import ThemeToggle from "./theme-toggle";

const hamburgerMenu = ({ toggle, setToggle }) => {

    const navs = getUserNavs();
    const navigate = useNavigate();

    const handleNavigate = (route) => {
        setToggle(false);
        setTimeout(() => {
            navigate(route);
        }, 500);
    }

    useEffect(() => {
        if (toggle) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [toggle]);

    return (
        <>
            <div className={`lg:hidden fixed inset-0 z-20 transition-colors duration-400 
                ${toggle ? "bg-black/80 pointer-events-auto" : "bg-black/0 pointer-events-none"}`}>
                <div className={`bg-neutral-900 w-full h-120 top-14 absolute rounded-b-xl flex flex-col items-center 
                    transform transition-transform duration-400 ease-in-out ${toggle ? "translate-y-0" : "-translate-y-full"}`}>
                    <div className="text-muted-font h-100 flex flex-col gap-12 items-center justify-center">
                        {navs.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavigate(item.route)}
                                className="text-xl text-neutral-300 transition-colors"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                    <div className="bg-transparent flex justify-end items-center gap-3 w-90 sm:w-150 px-1">
                        <LanguageToggle></LanguageToggle>
                        <ThemeToggle></ThemeToggle>
                    </div>

                </div>
            </div>
        </>
    )
}

export default hamburgerMenu;