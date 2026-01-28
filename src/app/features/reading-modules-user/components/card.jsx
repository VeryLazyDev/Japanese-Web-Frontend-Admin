import useAnimation from "@/hooks/useAnimation";
import { ChevronRight } from "lucide-react";

const Card = ({ title, Icon, desc, style, onClick }) => {
    const {
        hoverModuleCardAnimation: { onMouseEnter, onMouseLeave },
    } = useAnimation();
    return (
        <>
            <div
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="border border-primary-bd  bg-secondary-bg w-full h-auto p-6 rounded-lg cursor-pointer
           hover:shadow-md transition-all duration-200 select-none"
            >
                <div className="flex justify-between">
                    {Icon && <Icon className={style} />}
                    <ChevronRight
                        size={20}
                        className="text-muted-font"
                    ></ChevronRight>
                </div>

                <h1 className="w-full mt-5 mb-2 font-aux-mono uppercase">
                    {title}
                </h1>
                <p className="font-normal text-muted-font text-xs">{desc}</p>
            </div>
        </>
    );
};

export default Card;
