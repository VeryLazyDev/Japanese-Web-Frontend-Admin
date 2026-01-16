import { DockPages } from "@/constant/layout_constants";
import { useState } from "react";

const Dock = () => {
    const [currentFocus, setCurrentFocus] = useState("HOME");
    const baseDockBtnStyle =
        "w-12 h-12 items-center justify-center flex rounded";
    return (
        <div className="h-full w-fit flex items-center">
            <div className="p-1 w-fit h-fit border-primary border rounded gap-1">
                {DockPages.map((item) => (
                    <button
                        className={`${baseDockBtnStyle} ${currentFocus === item.pageName ? "bg-light-bg" : ""}`}
                        onClick={() => setCurrentFocus(item.pageName)}
                    >
                        <item.icon />
                    </button>
                ))}
            </div>
        </div>
    );
};
export default Dock;
