
import { ChevronRight } from "lucide-react";

const Card = ({title, Icon, desc, color}) => {
    return(
        <>
        <div className="border-neutral-700 bg-secondary-bg w-full h-auto p-6 border rounded-lg cursor-pointer
            hover:scale-102 hover:shadow-md transition-all duration-200 select-none">
                <div className="flex justify-between">
                    {Icon && <Icon size={32} className={color}/>}
                    <ChevronRight size={20} className="text-muted-font"></ChevronRight>
                </div>
            
            <h1 className="w-full mt-5 mb-2 font-semibold uppercase">{title}</h1>
            <p className="font-normal text-muted-font text-xs">{desc}</p>
        </div>
        </>
    )
}

export default Card;