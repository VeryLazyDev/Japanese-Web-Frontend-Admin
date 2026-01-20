import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LevelBadge from "./level-badge";

const BackHeader = ({ title }) => {

    const navigate = useNavigate();

    return (
        <>
            <div className="bg-transparent w-full h-10 mt-10 flex items-center gap-2">
                <button onClick={() => navigate("/")} className="w-10 h-10 cursor-pointer">
                    <ArrowLeft />
                </button>
                <h1 className="font-semibold">{title}</h1>
                <LevelBadge level={"N4"}></LevelBadge>
            </div>
        </>
    )
}

export default BackHeader