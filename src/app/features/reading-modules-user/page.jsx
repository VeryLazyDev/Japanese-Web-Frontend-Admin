import Card from "./components/card";
import BackHeader from "./components/back-header";
import { readingModules } from "@/constant/user-home-modules";
import { useState } from "react";
import SpeedrunPopup from "./components/speedrun-popup";



const ReadingModulePage = () => {

    const [isOpen, setIsOpen] = useState(false) // speedrun-popup



    return (
        <>
            <div className="bg-transparent mt-15 w-90 sm:w-150 lg:w-250 h-auto flex justify-center pt-3 pb-10">

                {isOpen && (
                    <div className='bg-black/80 fixed inset-0 z-50 flex items-center justify-center'>
                        <SpeedrunPopup close={() => setIsOpen(false)}/>
                    </div>
                )}

                <div className="bg-transparent w-full h-auto">
                    <BackHeader title={"Reading Modules"}></BackHeader>
                    <div className="bg-transparent w-full h-auto mt-7 gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        <Card title={readingModules[0].title} Icon={readingModules[0].icon} desc={readingModules[0].desc} style={readingModules[0].style}></Card>

                        <Card onClick={() => setIsOpen(true)}
                        title={readingModules[1].title} Icon={readingModules[1].icon} desc={readingModules[1].desc} style={readingModules[1].style}></Card>
                    </div>
                </div>

            </div>




        </>
    )
}

export default ReadingModulePage;
