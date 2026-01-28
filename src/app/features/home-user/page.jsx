import LevelFilter from "./components/level-filter";
import ModuleList from "./components/module-list";
import { logos } from "@/constant/user-home-modules";

const HomePageUser = () => {
    return (
        <>
            <div className="bg-transparent w-90 sm:w-150 lg:w-250 mt-15 h-auto flex flex-col justify-center pt-3 pb-10 px-5">
                <div className="bg-transparent w-auto">
                    <div className=" w-full h-auto mt-6 mb-2">
                        <img src={logos.logo} alt="logo" className="w-15"/>
                        <h1 className="font-semibold text-xl mt-4">Welcome to Motto,</h1>
                        <p className="font-normal text-sm text-muted-font mt-1">Ready to Start your journey? Pick a module below to master your fluency.</p>
                    </div>

                    <ModuleList></ModuleList>
                </div>
            </div>
        </>
    );
};
export default HomePageUser;
