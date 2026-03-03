import FuriganaRenderer from "@/components/furiganated-renderer";
import { useEditQuestion } from "../../hooks/useEditQuestions";
import { MdEdit, MdPreview } from "react-icons/md";

const EditParagraphSection = () => {
    const { selectedParagraph, previewMode, setPreviewMode } =
        useEditQuestion();
    return (
        <div className="bg-secondary-bg rounded-md shadow-sm p-4 space-y-2">
            <div className="flex flex-row items-center w-full gap-2">
                <p className="font-medium text-sm w-full">Edit Paragraph</p>
                <button
                    type="button"
                    className={`${previewMode === "code" ? "" : "text-primary/30"} cursor-pointer`}
                    onClick={() => setPreviewMode("code")}
                >
                    <MdEdit />
                </button>
                <button
                    type="button"
                    className={`${previewMode === "preview" ? "" : "text-primary/30"} cursor-pointer`}
                    onClick={() => setPreviewMode("preview")}
                >
                    <MdPreview />
                </button>
            </div>
            <textarea
                defaultValue={selectedParagraph?.paragraph || ""}
                className={`w-full h-60 p-3 rounded-md outline-none resize-none border border-primary-bd text-sm ${previewMode === "code" ? "" : "hidden"}`}
                placeholder="Enter the paragraph"
            ></textarea>
            <FuriganaRenderer
                text={selectedParagraph?.paragraph}
                className={`max-h-60 overflow-auto ${previewMode === "preview" ? "" : "hidden"}`}
            />
        </div>
    );
};
export default EditParagraphSection;
