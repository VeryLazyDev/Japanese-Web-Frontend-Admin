import Card from "./components/card";
import BackHeader from "./components/back-header";
import { readingModules } from "@/constant/user-home-modules";
import { useState } from "react";
import SpeedrunPopup from "./components/speedrun-popup";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ReadingModulePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [param] = useSearchParams();
    const { t } = useTranslation("reading-module", { keyPrefix: "user" });
    return (
        <>
            {isOpen && (
                <div className="bg-black/80 fixed inset-0 z-50 flex items-center justify-center">
                    <SpeedrunPopup close={() => setIsOpen(false)} />
                </div>
            )}

            <div className="bg-transparent w-full h-auto">
                <BackHeader title={"Reading Modules"}></BackHeader>
                <div className="bg-transparent w-full h-auto mt-7 gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <Card
                        title={readingModules[0].title}
                        Icon={readingModules[0].icon}
                        desc={t(readingModules[0].desc)}
                        onClick={() =>
                            navigate(
                                readingModules[0].nextPath +
                                    "?level=" +
                                    param.get("level"),
                            )
                        }
                        style={readingModules[0].style}
                    ></Card>

                    <Card
                        onClick={() => setIsOpen(true)}
                        title={readingModules[1].title}
                        Icon={readingModules[1].icon}
                        desc={t(readingModules[1].desc)}
                        style={readingModules[1].style}
                    ></Card>
                </div>
            </div>
        </>
    );
};

export default ReadingModulePage;
