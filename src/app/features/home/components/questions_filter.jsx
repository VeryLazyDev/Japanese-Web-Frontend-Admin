import { useState } from "react";
import FilterBtn from "./filter-btn";
import { MdOutlineTune } from "react-icons/md";

const QuestionFilter = () => {
    const [currentFocus, setCurrentFocus] = useState(0);
    return (
        <div className="flex justify-between mt-10 h-7 bg-transparent">
            {/* Left */}
            <div>
                <FilterBtn text={"Short"} onClick={() => setCurrentFocus(0)} currentFocus={currentFocus === 0}></FilterBtn>
                <FilterBtn text={"Medium"} onClick={() => setCurrentFocus(1)} currentFocus={currentFocus === 1}></FilterBtn>
                <FilterBtn text={"Long"} onClick={() => setCurrentFocus(2)} currentFocus={currentFocus === 2}></FilterBtn>
            </div>
            {/* Right */}
            <div className="bg-transparent w-32 h-full flex justify-between">
                <button className="w-7 h-7 bg-light-bg text-muted-font flex items-center justify-center rounded-full cursor-pointer">
                    <MdOutlineTune />
                </button>
                <button className="bg-teal-200 px-5 h-7 text-xs font-medium text-teal-700 rounded-sm cursor-pointer hover:brightness-80 transition-all duration-100">Create +</button>
            </div>

        </div>
    );
};
export default QuestionFilter;
