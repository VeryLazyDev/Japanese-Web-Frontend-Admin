import { KanjiModules } from "@/constant/user-home-modules";
import Card from "../reading-modules-user/components/card";
import BackHeader from "../reading-modules-user/components/back-header";

const KanjiModulesPage = () => {
    return(
        <>
            <div className="bg-transparent w-full h-auto">
                    <BackHeader title={"Kanji Modules"}></BackHeader>
                    <div className="bg-transparent w-full h-auto mt-7 gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        <Card title={KanjiModules[0].title} Icon={KanjiModules[0].icon} desc={KanjiModules[0].desc} style={KanjiModules[0].style}></Card>

                        <Card 
                        title={KanjiModules[1].title} Icon={KanjiModules[1].icon} desc={KanjiModules[1].desc} style={KanjiModules[1].style}></Card>
                    </div>
                </div>
        </>
    )
}

export default KanjiModulesPage;