import { DockPages } from "@/constant/layout_constants";
import { useState } from "react";
import DockBtn from "./dock_btn";

const Dock = () => {
    const [currentFocus, setCurrentFocus] = useState("HOME");

    return (
        <div className="p-1 w-fit h-fit border-primary border rounded gap-1 absolute bottom-1/2 left-5">
            {DockPages.map((item) => (
                <DockBtn
                    pageName={item.pageName}
                    route={item.route}
                    onClick={(pageName) => setCurrentFocus(pageName)}
                    currentFocus={currentFocus}
                    key={item.id}
                    icon={item.icon}
                />
            ))}
        </div>
    );
};
export default Dock;
