import { MdTune } from "react-icons/md";
import useReadingList from "../hooks/userReadingList";

const FilterBar = () => {
    const { paraType, changeParaType } = useReadingList();
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 max-sm:text-xs text-sm py-4">
                <button
                    onClick={() => changeParaType("Short")}
                    className={`${paraType == "Short" ? "bg-primary text-primary-bg" : "bg-primary/10 hover:bg-primary/20"} rounded p-2`}
                >
                    Short
                </button>
                <button
                    onClick={() => changeParaType("Medium")}
                    className={`${paraType == "Medium" ? "bg-primary text-primary-bg" : "bg-primary/10 hover:bg-primary/20"} rounded p-2`}
                >
                    Medium
                </button>
                <button
                    onClick={() => changeParaType("Long")}
                    className={`${paraType == "Long" ? "bg-primary text-primary-bg" : "bg-primary/10 hover:bg-primary/20"} rounded p-2`}
                >
                    Long
                </button>
            </div>
            <button
                className={`bg-primary/10 hover:bg-primary/20 rounded-full p-2 h-fit w-fit`}
            >
                <MdTune className="size-5" />
            </button>
        </div>
    );
};
export default FilterBar;
