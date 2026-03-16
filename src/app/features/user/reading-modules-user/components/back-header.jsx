import { ArrowLeft } from "lucide-react";
import LevelBadge from "./level-badge";

const BackHeader = ({ title }) => {
    return (
        <>
            <div className="bg-transparent w-full h-10 mt-10 flex items-center gap-2">
                <button
                    onClick={() => window.history.back()}
                    className="w-10 h-10 cursor-pointer"
                >
                    <ArrowLeft />
                </button>
                <h1 className="font-semibold text-xl mr-3">{title}</h1>
                <LevelBadge></LevelBadge>
            </div>
        </>
    );
};

export default BackHeader;
