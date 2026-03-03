import { paragraphLevel } from "@/constant/paragraph-data";
import useParagraph from "../hooks/useParagraph";
import { X } from "lucide-react";

const FilterMenu = () => {
    const { openFilter, handleCloseFilter, filter, setFilter } = useParagraph();
    return (
        <div
            className={`fixed inset-0 transition-all duration-200 flex flex-row z-20 h-full max-h-screen max-w-screen overflow-hidden ${openFilter ? "backdrop-blur-xs" : "pointer-events-none"}`}
        >
            <div className="w-full h-full" onClick={handleCloseFilter}></div>
            <div
                className={`min-w-100 max-w-screen h-full top-0 right-0  delay-100 transition-all p-4 ${openFilter ? "" : "delay-0 translate-x-full"}`}
            >
                <div className="w-full h-full bg-primary-bg border border-primary-bd rounded-md p-4 flex flex-col">
                    {/* header*/}
                    <div>
                        <h3 className="font-semibold ">Filter</h3>
                        <button className="">
                            <X />
                        </button>
                    </div>
                    {/* kanji level filter*/}
                    <div className="text-sm py-2">
                        <h4>Level</h4>
                        {paragraphLevel.map((item) => (
                            <>
                                <label htmlFor={item.value}>{item.label}</label>
                                <input
                                    type="radio"
                                    id={item.value}
                                    name={item.value}
                                    checked={
                                        item.value ===
                                        filter.level.toLowerCase()
                                    }
                                    onChange={() => {
                                        setFilter((prev) => ({
                                            ...prev,
                                            level: item.value.toUpperCase(),
                                        }));
                                    }}
                                />
                            </>
                        ))}
                    </div>
                    {/* paragraph length filter*/}
                    <div></div>
                </div>
            </div>
        </div>
    );
};
export default FilterMenu;
