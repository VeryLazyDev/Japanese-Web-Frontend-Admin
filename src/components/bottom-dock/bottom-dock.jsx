import { DockPages } from "@/constant/layout_constants";
import BottomDockBtn from "./bottom-dock-btn";
<<<<<<< HEAD

const BottomDock = () => {
  return (
    <div className="md:hidden w-full h-15 fixed bottom-0 left-0 bg-primary-bg  border-t border-primary-bd rounded-t-lg flex px-2 py-1 items-center justify-center">
      <div className="w-full  flex flex-row">
        {DockPages.map((item) => (
          <BottomDockBtn key={item.id} dockInfo={item} />
        ))}
      </div>
    </div>
  );
=======
import { useState } from "react";

const BottomDock = () => {
    const [currentSelected, setCurrentSelected] = useState(0);

    const handleSelect = (id) => {
        setCurrentSelected(id);
    };

    return (
        <div className="md:hidden w-full h-15 fixed bottom-0 left-0 bg-primary-bg  border-t border-primary-bd rounded-t-lg flex px-2 py-1 items-center justify-center">
            <div className="w-full  flex flex-row">
                {DockPages.map((item) => (
                    <BottomDockBtn
                        key={item.id}
                        dockInfo={item}
                        currentSelected={currentSelected}
                        onClick={handleSelect}
                    />
                ))}
            </div>
        </div>
    );
>>>>>>> 3299204 (add)
};
export default BottomDock;
