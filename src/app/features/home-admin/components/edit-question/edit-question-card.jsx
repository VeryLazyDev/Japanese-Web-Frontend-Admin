import { useEditQuestion } from "../../hooks/useEditQuestions";

const EditQuestionCard = ({ question }) => {
  const { activeQuestionNo } = useEditQuestion();
  return (
    <div
      className={`bg-secondary-bg rounded shadow-sm p-4 space-y-4 ${activeQuestionNo === question.id ? "" : "hidden"}`}
    >
      <p className="font-medium">Edit Questions</p>
      <div className="space-y-2">
        <p className="text-sm">Question Text</p>
        <textarea
          defaultValue={question.question}
          className="w-full h-24 bg-light-bg p-3 rounded-md outline-none resize-none border border-neutral-500 text-sm"
          placeholder="Enter the Question"
        ></textarea>
      </div>

      <div className="space-y-2">
        <p className="text-sm">Answer Options</p>
        <div className="space-y-2">
          {question.answerList &&
            question.answerList.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center gap-3"
              >
                <input
                  type="text"
                  defaultValue={item.answer}
                  // value={
                  //   localQuestionEdits[activeQuestionNo]?.options[
                  //     index
                  //   ] || ""
                  // }
                  // placeholder={`Option ${answer}`}
                  className="bg-light-bg flex-1 h-10 p-3 rounded-md text-xs border border-neutral-500"
                />
                <label className="flex justify-center items-center gap-1 text-xs cursor-pointer">
                  <input
                    type="radio"
                    // name={`correct-${activeQuestionNo}`}
                    checked={item.correct_answer}
                  />
                  Correct
                </label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default EditQuestionCard;
