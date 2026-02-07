import { MdCode, MdEdit, MdPreview } from "react-icons/md";
import useQuestionState from "../hooks/userQuestionState";

const PreviewModeSwitch = () => {
  const { previewMode, setPreviewMode } = useQuestionState();
  const style = "px-2 h-8 bg-primary text-primary-bg rounded text-sm  border";
  const activeStyle = "bg-primary-bg border-primary-bd text-primary-font";
  return (
    <div className="flex items-center gap-1 h-8">
      <button
        type="button"
        className={`${style} ${previewMode === "edit" ? activeStyle : ""}`}
        onClick={() => setPreviewMode("edit")}
      >
        <MdEdit />
      </button>
      <button
        type="button"
        className={`${style} ${previewMode === "code" ? activeStyle : ""}`}
        onClick={() => setPreviewMode("code")}
      >
        <MdCode />
      </button>
      <button
        type="button"
        className={`${style} ${previewMode === "preview" ? activeStyle : ""}`}
        onClick={() => setPreviewMode("preview")}
      >
        <MdPreview />
      </button>
    </div>
  );
};

export default PreviewModeSwitch;
