import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LevelCard from "./components/level-card";
import { useTranslation } from "react-i18next";

const LevelSelectPage = ({ title, levels }) => {
    const navigate = useNavigate();
    const { t } = useTranslation("level", { keyPrefix: "user" });
    return (
        <>
            <header className="bg-transparent w-full h-auto mt-8 space-y-5">
                <button
                    onClick={() => navigate("/")}
                    className="flex group gap-2 items-center cursor-pointer "
                >
                    <ArrowLeft
                        size={20}
                        className="text-muted-font group-hover:text-primary transition-colors duration-200"
                    />
                    <span className="font-medium text-muted-font text-base group-hover:text-primary transition-colors duration-150">
                        Back
                    </span>
                </button>

                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <p className="text-base leading-relaxed text-muted-font">
                        {t("header-desc")}
                    </p>
                </div>
            </header>

            <section className="bg-transparent w-full h-auto mt-10 gap-3 grid grid-cols-1 lg:grid-cols-3">
                {levels.map((item) => (
                    <LevelCard
                        key={item.id}
                        level={item.level}
                        title={item.title}
                        desc={item.desc}
                        bg={item.bg}
                        color={item.color}
                        nextPath={levels[0].nextPath + "?level=" + item.level}
                    />
                ))}
            </section>
        </>
    );
};

export default LevelSelectPage;
