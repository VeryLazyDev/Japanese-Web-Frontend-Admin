import { useTranslation } from "react-i18next";
import LevelFilter from "./components/level-filter";
import ModuleList from "./components/module-list";
import { logos } from "@/constant/user-home-modules";
const HomePageUser = () => {
    const { t } = useTranslation("home");
    return (
        <>
            <div className="bg-transparent w-auto">
                <div className=" w-full h-auto mt-6 mb-2">
                    <img
                        src={logos.logo}
                        alt="logo"
                        className="w-15"
                        // onClick={() => i18n.changeLanguage("mm")}
                    />
                    <h1 className="font-semibold text-xl mt-4">
                        {/* Welcomt to Motto*/}
                        {t("user.greeting 1")}
                    </h1>
                    <p className="font-normal text-sm text-muted-font mt-1">
                        {/* Ready to Start your journey? Pick a module below to*/}
                        {/* master your fluency.*/}
                        {t("user.greeting 2")}
                    </p>
                </div>

                <ModuleList></ModuleList>
            </div>
        </>
    );
};
export default HomePageUser;
