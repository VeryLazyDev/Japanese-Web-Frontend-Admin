import useQuestionState from "../hooks/userQuestionState";
import Dropdown from "./dropdown";
import { paragarphLevel, paragarphType } from "@/constant/paragraph-data";

const AddParagraph = () => {
  const { setCurrentKanjiLevel, setCurrentParagraphType } = useQuestionState();

  const handleKanjiLevelSelect = (option) => {
    setCurrentKanjiLevel(option);
  };
  const handleParagraphTypeSelect = (option) => {
    setCurrentParagraphType(option);
  };
  return (
    <>
      <div className="bg-secondary-bg rounded-lg">
        <div className="bg-transparent p-4">
          <div className="flex max-md:flex-col gap-2 justify-between pb-3">
            <div className="">
              <p className="font-inter font-semibold w-auto pb-1">Paragraph</p>
              <p className="text-xs text-muted-font w-auto">
                Add the main reading paragraph
              </p>
            </div>
            <div className="flex gap-3">
              <Dropdown
                options={paragarphType}
                onSelect={handleParagraphTypeSelect}
                defaultValue="Short"
                style={"px-4 w-24"}
              />
              <Dropdown
                options={paragarphLevel}
                onSelect={handleKanjiLevelSelect}
                defaultValue="Beginner (N5)"
                style={"px-4 w-44"}
              />
            </div>
          </div>
          <textarea
            className="w-full h-28 bg-light-bg p-3 rounded-md outline-none border border-neutral-500 resize-none text-xs"
            placeholder="Enter the main paragraph..."
            name="paragraph"
            required
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default AddParagraph;
