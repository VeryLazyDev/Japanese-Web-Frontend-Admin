import { useState } from "react";
import useQuestionState from "../hooks/userQuestionState";
import AddQuestionCard from "../components/add-question-card";
import { MdAdd, MdDelete } from "react-icons/md";
const AddParagraphQuestions = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);
  const { Questions, AddNewQuestion, RemoveLastQuestion, lastQuestionId } =
    useQuestionState();
  return (
    <div className="bg-secondary-bg rounded-lg mt-5">
      <div className="bg-transparent p-4">
        <div className="flex justify-between pb-4">
          <div>
            <p className="font-inter font-semibold w-auto pb-1">
              Add Questions
            </p>
            <p className="text-xs text-muted-font w-auto">
              Create multiple-choice questions about the paragraph
            </p>
          </div>
        </div>

        {Questions.map((item) => (
          <AddQuestionCard
            key={item.questionId}
            questionId={item.questionId}
            currentQuestion={activeQuestion}
          />
        ))}

        <div className="flex flex-row gap-3 justify-end py-4">
          <div className="w-full overflow-auto h-full">
            <div className="flex flex-row gap-3 w-fit h-full justify-end">
              {Questions.map((item) => (
                <button
                  key={item.questionId}
                  type="button"
                  onClick={() => setActiveQuestion(item.questionId)}
                  className={`h-8 w-8 flex items-center justify-center font-inter text-xs rounded cursor-pointer transition-all ${activeQuestion === item.questionId ? "bg-white text-black" : "bg-neutral-800"} `}
                >
                  {item.questionId}
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              (AddNewQuestion(), setActiveQuestion(lastQuestionId.current));
            }}
            className={`h-8 w-8 flex items-center justify-center font-inter text-xs rounded cursor-pointer transition-all bg-primary`}
          >
            <MdAdd size={18} className="text-primary-bg" />
          </button>
          <button
            type="button"
            onClick={() => {
              RemoveLastQuestion();
              setActiveQuestion(lastQuestionId.current);
            }}
            className="bg-red-400 w-8 h-8 items-center justify-center flex
                        text-xs font-inter text-black rounded-sm cursor-pointer hover:brightness-80 transition-all duration-100 mr-3 disabled:brightness-50"
            disabled={Questions.length <= 0}
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddParagraphQuestions;
