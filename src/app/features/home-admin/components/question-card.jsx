import { PencilIcon } from "lucide-react";
import { useEditQuestion } from "../hooks/useEditQuestions";
import { MdEdit } from "react-icons/md";

const QuestionCard = ({ id, paragraph }) => {
    const { openEdit } = useEditQuestion();
    const handleClick = (e) => {
        e.stopPropagation();
        openEdit(id);
    };
    return (
        <>
            <div className="w-auto h-auto p-4 bg-secondary-bg border border-neutral-700 rounded-md cursor-pointer hover:brightness-80 transition-all duration-200">
                <div className="flex justify-between">
                    <h1 className="font-noto-sans-jp font-medium">問題 {id}</h1>

                    <div
                        onClick={handleClick}
                        className="bg-primary w-9 h-9 rounded-full cursor-pointer flex items-center justify-center"
                    >
                        <MdEdit className="text-xl text-white" />
                    </div>
                </div>

                {/* Paragraph d mhr */}
                <div className="max-w-58 h-20 text-xs text-muted-font font-noto-sans-jp bg-transparent pt-3 overflow-hidden">
                    {paragraph}.....
                </div>
            </div>
        </>
    );
};

export default QuestionCard;
