import LevelFilter from "./components/level-filter";
import ModuleList from "./components/module-list";

const HomePageUser = () => {
    return (
        <>
            <div className="bg-transparent w-90 sm:w-150 lg:w-250 mt-15 h-auto flex flex-col justify-center pt-3 pb-10 px-5">
                <div className="bg-transparent w-auto">
                    <div className=" w-full h-auto py-5">
                        <h1 className="font-semibold text-xl">Welcome to Motto,</h1>
                        <p className="font-normal text-sm text-muted-font mt-2">Ready to Start your journey? Pick a module below to master your fluency.</p>
                    </div>

                    <ModuleList></ModuleList>
                </div>
            </div>
        </>
    );
};
export default HomePageUser;
