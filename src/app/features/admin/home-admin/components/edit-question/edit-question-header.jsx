import { X } from "lucide-react";
import { useEditQuestion } from "../../hooks/useEditQuestions";

const EditQuestionHeader = () => {
  const { selectedParagraph, closeEdit } = useEditQuestion();
  return (
    <div className="flex justify-between items-center px-6 py-4">
      <p className="font-noto-sans-jp font-bold text-md">
        問題 {selectedParagraph?.id}
      </p>{" "}
      <button
        onClick={closeEdit}
        type="button"
        className="bg-primary w-5 h-5 rounded-full cursor-pointer flex items-center justify-center p-1"
      >
        <X className="text-primary-bg" />
      </button>
    </div>
  );
};
export default EditQuestionHeader;
