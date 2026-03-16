import useAnimation from "@/hooks/useAnimation";
import ReadingStatusBadge from "./badge";

const ReadingCard = ({ id, paragraph }) => {
    const {
        hoverModuleCardAnimation: { onMouseEnter, onMouseLeave },
    } = useAnimation();
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="w-full h-30 border-primary-bd border bg-primary/3 font-noto-sans-jp rounded p-5 flex flex-col gap-2 cursor-pointer
                       hover:shadow-md active:scale-95 transition-all duration-100 select-none"
        >
            <div className="flex flex-row justify-between">
                <h4 className="font-semibold text-md max-sm:text-sm">
                    問題 {id}
                </h4>
                <ReadingStatusBadge status={"Completed"} />
            </div>
            <p className="line-clamp-2 text-sm max-sm:text-xs">{paragraph}</p>
        </div>
    );
};
export default ReadingCard;
