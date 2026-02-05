import { useState } from "react";
import FilterBtn from "./filter-btn";
import { MdEdit } from "react-icons/md";
import { NavLink } from "react-router-dom";

const QuestionFilter = () => {
    const [currentFocus, setCurrentFocus] = useState(0);
    return (
        <div className="flex justify-between mt-10 h-fit bg-transparent">
            {/* Left */}
            <div className="flex gap-1 flex-wrap">
                <FilterBtn
                    text={"Short"}
                    onClick={() => setCurrentFocus(0)}
                    currentFocus={currentFocus === 0}
                ></FilterBtn>
                <FilterBtn
                    text={"Medium"}
                    onClick={() => setCurrentFocus(1)}
                    currentFocus={currentFocus === 1}
                ></FilterBtn>
                <FilterBtn
                    text={"Long"}
                    onClick={() => setCurrentFocus(2)}
                    currentFocus={currentFocus === 2}
                ></FilterBtn>
            </div>
            {/* Right */}
            <div className="bg-transparent w-32 h-full flex justify-between">
                <button className="w-7 h-7 bg-light-bg text-muted-font flex items-center justify-center rounded-full cursor-pointer">
                    <MdEdit className="text-primary " />
                </button>
                <NavLink
                    to={"/admin/new-exercise"}
                    className="bg-teal-200 px-5 py-2 text-xs font-medium
                    text-teal-700 rounded-sm cursor-pointer hover:brightness-80 transition-all duration-100"
                >
                    Create +
                </NavLink>
            </div>
        </div>
    );
};
export default QuestionFilter;
