import { Trash } from "lucide-react";
import { useEditQuestion } from "../../hooks/useEditQuestions";

const EditQuestionBottomSection = () => {
  const { handleDeleteQuestion } = useEditQuestion();
  return (
    <div className="flex gap-2 w-full p-6">
      <button
        type="submit"
        className="flex-1 bg-purple-200 text-purple-700 rounded-md text-sm h-8"
      >
        Submit
      </button>
      <button
        type="button"
        onClick={handleDeleteQuestion}
        className="bg-red-200 flex items-center justify-center h-8 w-8 rounded-md"
      >
        <Trash fill="red" stroke="red" size={16} />
      </button>
    </div>
  );
};
export default EditQuestionBottomSection;
