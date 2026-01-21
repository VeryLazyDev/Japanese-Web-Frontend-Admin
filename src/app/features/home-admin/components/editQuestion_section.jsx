import { X, Trash } from "lucide-react";

import { useEditQuestion } from "../../hooks/editContext";

const EditQuestionSection = () => {
  const {
    selectedQuestion,
    localParagraphEdit,
    localQuestionEdits,
    activeQuestionNo,
    setActiveQuestionNo,
    closeEdit,
    handleEditParagraph,
    handleEditQuestionBody,
    handleEditQuestionOption,
    handleEditSelectCorrect,
    handleSubmitAll,
    handleTrash,
  } = useEditQuestion();

  if (!selectedQuestion) return null;

  return (
    <section className="h-full flex flex-col border-l">
      {/* head */}
      <div className="flex justify-between items-center p-6">
        <p className="font-noto-sans-jp font-bold text-2xl">
          問題 {selectedQuestion?.id}
        </p>{" "}
        <div
          onClick={closeEdit}
          className="bg-primary w-9 h-9 rounded-full cursor-pointer flex items-center justify-center"
        >
          <X stroke="black" />
        </div>
      </div>

      {/* body */}
      <div className="flex-1 flex flex-col justify-between overflow-hidden">
        <div className="flex-1 flex flex-col p-6 space-y-4 overflow-y-auto">
          <div className="bg-secondary-bg rounded-md shadow-sm p-4 space-y-2">
            <p className="font-medium">Edit Paragraph</p>
            <textarea
              value={localParagraphEdit?.paragraph || ""}
              onChange={handleEditParagraph}
              className="w-full h-48 bg-light-bg p-3 rounded-md outline-none resize-none border border-neutral-500 text-sm"
              placeholder="Enter the paragraph"
            ></textarea>
          </div>

          <div className="bg-secondary-bg rounded shadow-sm p-4 space-y-4">
            <p className="font-medium">Edit Questions</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-sm">Question Text</p>
                <div className="flex gap-2">
                  {[0, 1, 2, 3].map((questionNo) => {
                    const isActive = activeQuestionNo === questionNo;

                    return (
                      <button
                        key={questionNo}
                        type="button"
                        onClick={() => setActiveQuestionNo(questionNo)}
                        className={`h-8 w-8 flex items-center justify-center text-sm rounded cursor-pointer transition-all
                        ${isActive ? "bg-white text-black" : "bg-light-bg"}`}
                      >
                        {questionNo + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
              <textarea
                value={localQuestionEdits[activeQuestionNo]?.body || ""}
                onChange={handleEditQuestionBody}
                className="w-full h-24 bg-light-bg p-3 rounded-md outline-none resize-none border border-neutral-500 text-sm"
                placeholder="Enter the Question"
              ></textarea>
            </div>

            <div className="space-y-2">
              <p className="text-sm">Answer Options</p>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((answer, index) => (
                  <div
                    key={answer}
                    className="flex justify-between items-center gap-3"
                  >
                    <input
                      type="text"
                      value={
                        localQuestionEdits[activeQuestionNo]?.options[index] ||
                        ""
                      }
                      onChange={(e) =>
                        handleEditQuestionOption(index, e.target.value)
                      }
                      placeholder={`Option ${answer}`}
                      className="bg-light-bg flex-1 h-10 p-3 rounded-md text-xs border border-neutral-500"
                    />
                    <label className="flex justify-center items-center gap-1 text-xs cursor-pointer">
                      <input
                        type="radio"
                        name={`correct-${activeQuestionNo}`}
                        checked={
                          localQuestionEdits[activeQuestionNo]?.correct ===
                          index
                        }
                        onChange={() => handleEditSelectCorrect(index)}
                      />{" "}
                      Correct
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex gap-2 w-full">
            <button
              onClick={handleSubmitAll}
              className="flex-1 bg-purple-200 text-purple-700 rounded-md text-sm h-8"
            >
              Submit
            </button>
            <div
              onClick={handleTrash}
              className="bg-red-200 flex items-center justify-center h-8 w-8 rounded-md"
            >
              <Trash fill="red" stroke="red" size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditQuestionSection;
