import usePullChain from "@/hooks/usePullChain";
import { Lightbulb } from "lucide-react";
import {
    MdLightbulb,
    MdOutlineLightbulb,
    MdWbIncandescent,
} from "react-icons/md";

const PullChain = () => {
    const { onMouseDown, onTouchStart, theme } = usePullChain();
    return (
        <>
            {/* <div className="fixed top-0 left-7 items-center flex justify-center flex-col">
        <div class="h-8 w-6 border-r-2 border-b-2 border-primary rounded-br-full"></div>
        <Lightbulb className="opacity-0" />
      </div>*/}
            <div
                id="pull"
                className="fixed -top-10 left-10 flex items-center justify-center flex-col max-md:hidden"
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
            >
                <div className="w-0.5 h-30 bg-primary"></div>
                {theme === "dark" ? (
                    <MdWbIncandescent />
                ) : (
                    <MdOutlineLightbulb className="rotate-180" />
                )}
            </div>
        </>
    );
};
export default PullChain;
