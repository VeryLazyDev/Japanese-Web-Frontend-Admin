import { useTranslation } from "react-i18next";
import ModuleCard from "./module-card";
import { modules } from "@/constant/user-home-modules";
const ModuleList = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="flex flex-col items-center mt-10 w-full">
                <h1 className="font-semibold text-xl w-full mb-5">
                    Learning Modules
                </h1>

                <div className="bg-transparent h-auto mt-2 gap-3 grid w-auto sm:grid-cols-2 lg:grid-cols-3">
                    {modules.map((item) => (
                        <ModuleCard
                            key={item.id}
                            title={item.title}
                            // description={item.description}
                            description={t(
                                "user." +
                                    item.title.toLowerCase() +
                                    "-module-desc",
                            )}
                            kanji={item.kanji}
                            bgColor={item.bgColor}
                            kanjiColor={item.kanjiColor}
                            path={item.path}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default ModuleList;
