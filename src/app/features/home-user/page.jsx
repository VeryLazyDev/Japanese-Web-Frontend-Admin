import LevelFilter from "./components/levelFilter";
import ModuleList from "./components/moduleList";


const HomePageUser = () => {
    return (
        <>
            <div className="bg-transparent w-full h-auto flex justify-center pt-3 pb-10">

                <div className="bg-transparent w-auto">
                    <div className="bg-transparent w-full h-auto py-5">
                        <h1 className="font-inter font-semibold w-auto">Select Your Level</h1>
                        <p className="text-xs text-muted-font w-auto mt-2">Choose your JLPT level ( Japanese Language Proficiency Test )</p>
                        <p className="text-xs text-muted-font w-auto">to get personalized content</p>
                    </div>

                    <LevelFilter></LevelFilter>
                    <ModuleList></ModuleList>
                </div>

            </div>
        </>
    );
};
export default HomePageUser;
