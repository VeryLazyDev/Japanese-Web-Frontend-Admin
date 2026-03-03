import { paragraphLevel, paragraphType } from "@/constant/paragraph-data";
import { createContext, useRef, useState } from "react";
const QuestionStateContext = createContext();

const QuestionStateProvider = ({ children }) => {
  const [paragraph, setParagraph] = useState("");
  const [Questions, setQuestions] = useState([
    {
      questionId: 1,
      correctAnswerId: 0,
    },
  ]);

  const [previewMode, setPreviewMode] = useState("edit");
  const lastQuestionId = useRef(1);
  const [currentKanjiLevel, setCurrentKanjiLevel] = useState(paragraphLevel[0]);
  const [currentParagraphType, setCurrentParagraphType] = useState(
    paragraphType[0],
  );

  const AddNewQuestion = () => {
    lastQuestionId.current += 1;
    setQuestions((prev) => [
      ...prev,
      {
        questionId: lastQuestionId.current,
        correctAnswerId: 0,
      },
    ]);
  };

  const RemoveLastQuestion = () => {
    if (lastQuestionId.current === 1) return;
    setQuestions((prev) => prev.slice(0, -1));
    lastQuestionId.current -= 1;
  };

  const ChangeCorrectAnswer = (questionId, newCorrectId) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.questionId === questionId
          ? { ...q, correctAnswerId: newCorrectId }
          : q,
      ),
    );
  };
  const handleOnParagraphChange = (e) => {
    setParagraph(e.target.value);
  };

  return (
    <QuestionStateContext.Provider
      value={{
        Questions,
        ChangeCorrectAnswer,
        AddNewQuestion,
        RemoveLastQuestion,
        currentKanjiLevel,
        currentParagraphType,
        setCurrentKanjiLevel,
        setCurrentParagraphType,
        lastQuestionId,
        paragraph,
        handleOnParagraphChange,
        previewMode,
        setPreviewMode,
      }}
    >
      {children}
    </QuestionStateContext.Provider>
  );
};
export { QuestionStateContext, QuestionStateProvider };
