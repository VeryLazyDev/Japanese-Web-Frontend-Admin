import { useState } from "react";

const AddParagraphQuestions = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);

  const [questions, setQuestions] = useState([
    {
      question: "",
      answers: [
        { id: "1", text: "" },
        { id: "2", text: "" },
        { id: "3", text: "" },
        { id: "4", text: "" },
      ],
      correct: "",
    },
    {
      question: "",
      answers: [
        { id: "1", text: "" },
        { id: "2", text: "" },
        { id: "3", text: "" },
        { id: "4", text: "" },
      ],
      correct: "",
    },
    {
      question: "",
      answers: [
        { id: "1", text: "" },
        { id: "2", text: "" },
        { id: "3", text: "" },
        { id: "4", text: "" },
      ],
      correct: "",
    },
    {
      question: "",
      answers: [
        { id: "1", text: "" },
        { id: "2", text: "" },
        { id: "3", text: "" },
        { id: "4", text: "" },
      ],
      correct: "",
    },
  ]);
  
  const currentQuestion = questions[activeQuestion - 1];

  // Update question text
  const updateQuestion = (value) => {
    setQuestions(
      questions.map((question, index) =>
        index === activeQuestion - 1
          ? { ...question, question: value }
          : question,
      ),
    );
  };

  // Update answer text
  const updateAnswer = (id, value) => {
    setQuestions(
      questions.map((question, index) =>
        index === activeQuestion - 1
          ? {
              ...question,
              answers: question.answers.map((answer) =>
                answer.id === id ? { ...answer, text: value } : answer,
              ),
            }
          : question,
      ),
    );
  };

  const save = () => {
    console.log("Saved!");
    // if ( !correct || answers.some(a => !a.text)) {
    //   alert("something wrong!")
    //   return;
    // }
  };

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

        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <p className="text-sm font-inter w-auto pb-3">
              Question Text {activeQuestion}
            </p>
            <textarea
              value={currentQuestion.question}
              onChange={(e) => updateQuestion(e.target.value)}
              className="w-full h-38 bg-light-bg p-3 rounded-md outline-none border border-neutral-500 resize-none text-xs"
              placeholder="Enter the main paragraph..."
            ></textarea>
            <div className="flex flex-row gap-3 justify-end py-3">
              {[1, 2, 3, 4].map((number) => (
                <button
                  key={number}
                  onClick={() => setActiveQuestion(number)}
                  className={`h-8 w-8 flex items-center justify-center font-inter text-xs rounded cursor-pointer transition-all ${activeQuestion === number ? "bg-white text-black" : "bg-neutral-800"} `}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>

          <div className="">
            <p className="text-sm font-inter w-auto pb-3">
              Answer Options {activeQuestion}
            </p>
            {currentQuestion.answers.map((answer) => (
              <div className="flex items-center gap-3">
                <input
                  key={answer.id}
                  value={answer.text}
                  onChange={(e) => updateAnswer(answer.id, e.target.value)}
                  placeholder={`Option${answer.id}`}
                  className="bg-light-bg w-full h-8 p-3 mb-2 rounded-md text-xs border border-neutral-500"
                />
                <input
                  type="radio"
                  name={`correct-${currentQuestion.id}`}
                  checked={currentQuestion.correct === answer.id}
                  onChange={() =>
                    setQuestions(
                      questions.map((question) =>
                        question.id === currentQuestion.id
                          ? { ...question, correct: answer.id }
                          : question,
                      ),
                    )
                  }
                  className="-mt-2"
                />
                <label className="text-xs -mt-2">correct</label>
              </div>
            ))}

            <div className="flex justify-end py-3 mr-17">
              <button
                onClick={save}
                className="bg-neutral-100 px-15 h-8 text-xs font-inter text-black rounded-sm cursor-pointer hover:brightness-80 transition-all duration-100 mr-3"
              >
                Save
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddParagraphQuestions;
