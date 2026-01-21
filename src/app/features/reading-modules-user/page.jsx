import Card from "./components/card";
import BackHeader from "./components/back-header";
import { readingModules } from "@/constant/user-home-modules";


const ReadingModulePage = () => {
    return (
        <>
            <div className="bg-transparent w-90 sm:w-150 lg:w-250 h-auto flex justify-center pt-3 pb-10">
                <div className="bg-transparent w-full h-auto">
                    <BackHeader title={"Reading Modules"}></BackHeader>
                    <div className="bg-transparent w-full h-auto mt-5 gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {readingModules.map((item) => (
                            <Card key={item.id} title={item.title} Icon={item.icon} desc={item.desc} color={item.color}></Card>
                        ))}
                    </div>
                </div>

            </div>




        </>
    )
}

export default ReadingModulePage;
