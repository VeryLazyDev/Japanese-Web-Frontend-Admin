import { ChevronDown } from "lucide-react";
import Dropdown from "./dropdown";

const AddParagraph = () => {
  const paragarphType = [
    { value: "short", label: "Short" },
    { value: "medium", label: "Medium" },
    { value: "long", label: "Long" },
  ];

  const paragarphLevel = [
    { value: "n5", label: "Beginner (N5)" },
    { value: "n4", label: "Elementary (N4)" },
    { value: "n3", label: "Pre-intermediate (N3)" },
    { value: "n2", label: "Intermediate (N2)" },
    { value: "n1", label: "Advanced (N1)" },
  ];

  const handleSelect = (option) => {
    console.log(option);
  };

  return (
    <>
      <div className="bg-secondary-bg rounded-lg">
        <div className="bg-transparent p-4">
          <div className="flex justify-between pb-3">
            <div className="">
              <p className="font-inter font-semibold w-auto pb-1">Paragraph</p>
              <p className="text-xs text-muted-font w-auto">
                Add the main reading paragraph
              </p>
            </div>
            <div className="flex justify-center gap-3">
              <Dropdown
                options={paragarphType}
                onSelect={handleSelect}
                defaultValue="Short"
                style={"px-4 w-24"}
              />
              <Dropdown
                options={paragarphLevel}
                onSelect={handleSelect}
                defaultValue="Beginner (N5)"
                style={"px-4 w-44"}
              />
            </div>
          </div>
          <textarea
            className="w-full h-28 bg-light-bg p-3 rounded-md outline-none border border-neutral-500 resize-none text-xs"
            placeholder="Enter the main paragraph..."
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default AddParagraph;
