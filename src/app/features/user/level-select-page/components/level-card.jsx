import { ArrowUpRight } from "lucide-react";
import useAnimation from "@/hooks/useAnimation";
import { useNavigate } from "react-router-dom";
import useLevel from "@/hooks/useLevel";



const LevelCard = ({level, title, desc, bg, color, nextPath}) => {
    const navigate = useNavigate()
    const { currentLevel, setCurrentLevel } = useLevel()
    const {
        hoverModuleCardAnimation: { onMouseEnter, onMouseLeave },
    } = useAnimation();

    return (
    <>
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} 
    onClick={()=> {
        setCurrentLevel(level)
        navigate(nextPath);
    }}
     className="bg-secondary-bg relative group border border-primary-bd rounded-lg w-full h-auto p-6
      flex flex-col items-start transition-all duration-200 hover:shadow-lg active:scale-95 cursor-pointer">
        
        <div className={`${bg} p-3 mb-4 rounded-lg group-hover:scale-105 transition-transform duration-300`}>
            <p className={`text-lg font-semibold ${color}`}>{level}</p>
        </div>

        <div className="">
            <span className="text-base font-medium block">{title}</span>
            <span className="text-sm text-muted-font mt-1 block">{desc}</span>
        </div>

        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight size={18} className={`${color}`}></ArrowUpRight>
        </div>
    </div>
    </>
    )
}

export default LevelCard;