import useQuestionState from "../hooks/userQuestionState";
import Dropdown from "./dropdown";
import { paragarphLevel, paragarphType } from "@/constant/paragraph-data";

import FuriganaRenderer from "./furiganated-renderer";
import PreviewModeSwitch from "./preview-mode-switch";
import useFurigana from "../hooks/useFurigana";
import CodeViewRenderer from "./codeview-renderer";
const AddParagraph = () => {
    const {
        setCurrentKanjiLevel,
        setCurrentParagraphType,
        previewMode,
        paragraph,
        handleOnParagraphChange,
    } = useQuestionState();
    const { furiganatedString } = useFurigana();
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
                            <p className="font-inter font-semibold w-auto pb-1">
                                Paragraph
                            </p>
                            <p className="text-xs text-muted-font w-auto">
                                Add the main reading paragraph
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <PreviewModeSwitch />
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
                        className={`w-full min-h-50 bg-light-bg p-3 rounded-md outline-none border border-neutral-500 resize-none text-xs ${previewMode === "edit" ? "" : "hidden"}`}
                        placeholder="Enter the main paragraph..."
                        name="paragraph"
                        value={paragraph}
                        onChange={handleOnParagraphChange}
                        required
                    ></textarea>
                    <div
                        className={`w-full min-h-50 ${previewMode === "code" ? "" : "hidden"}`}
                    >
                        <CodeViewRenderer />
                    </div>
                    <div
                        className={`w-full min-h-50 ${previewMode === "preview" ? "" : "hidden"}`}
                    >
                        <FuriganaRenderer text={furiganatedString} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddParagraph;
