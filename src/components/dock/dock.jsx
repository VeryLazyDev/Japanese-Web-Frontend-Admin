import { DockPages } from "@/constant/layout_constants";
import { useState } from "react";
import DockBtn from "./dock_btn";

const Dock = () => {
    const [currentFocus, setCurrentFocus] = useState(1);

    return (
        <div className="p-1 w-fit h-fit border-primary border rounded gap-1 absolute bottom-1/2 left-5">
            <div
                className={`bg-light-bg calc() w-12 h-12 absolute rounded z-0 transition-all`}
                style={{
                    transform: `translateY(calc(var(--spacing) * 12 * ${currentFocus - 1}))`,
                }}
            />
            {DockPages.map((item) => (
                <DockBtn
                    pageName={item.pageName}
                    route={item.route}
                    onClick={() => setCurrentFocus(item.id)}
                    currentFocus={currentFocus}
                    key={item.id}
                    icon={item.icon}
                />
            ))}
        </div>
    );
};
export default Dock;
