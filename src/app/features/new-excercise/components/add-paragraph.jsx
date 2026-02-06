import useQuestionState from "../hooks/userQuestionState";
import Dropdown from "./dropdown";
import { paragarphLevel, paragarphType } from "@/constant/paragraph-data";
<<<<<<< HEAD

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
=======
import FuriganaRenderer from "./furiganated-renderer";

const AddParagraph = () => {
    const {
        setCurrentKanjiLevel,
        setCurrentParagraphType,
        Furiganate,
        handleOnParagraphChange,
        paragraph,
        preview,
        previewMode,
        HexToKanji,
        setPreviewMode,
    } = useQuestionState();

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
                    <div className="flex justify-between pb-3">
                        <div className="">
                            <p className="font-inter font-semibold w-auto pb-1">
                                Paragraph
                            </p>
                            <p className="text-xs text-muted-font w-auto">
                                Add the main reading paragraph
                            </p>
                        </div>
                        <div className="flex justify-center gap-3">
                            <button
                                type="button"
                                className="px-2 h-8 bg-primary text-primary-bg rounded text-sm"
                                onClick={() => setPreviewMode((prev) => !prev)}
                            >
                                {previewMode ? "Preview" : "Edit Mode"}
                            </button>
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
                    <div>
                        <textarea
                            className={`w-full h-50 bg-light-bg p-3 rounded-md outline-none border border-neutral-500 resize-none text-xs ${previewMode ? "hidden" : ""}`}
                            placeholder="Enter the main paragraph..."
                            name="paragraph"
                            onChange={handleOnParagraphChange}
                            value={paragraph}
                            required
                        ></textarea>
                        <div
                            className={`${previewMode ? "" : "hidden"}`}
                            // dangerouslySetInnerHTML={{
                            //     __html: preview,
                            // }}
                        >
                            <FuriganaRenderer text={paragraph} />
                        </div>
                    </div>
                    <button
                        onClick={Furiganate}
                        className="p-2 bg-primary text-primary-bg rounded m-1 text-sm"
                        type="button"
                    >
                        Furiganation
                    </button>
                    <button
                        onClick={HexToKanji}
                        className="p-2 bg-primary text-primary-bg rounded m-1 text-sm"
                        type="button"
                    >
                        Make it readable
                    </button>
                </div>
            </div>
        </>
    );
>>>>>>> 3299204 (add)
};

export default AddParagraph;
