import { paragarphLevel, paragarphType } from "@/constant/paragraph-data";
import { createContext, useRef, useState } from "react";
const QuestionStateContext = createContext();
const QuestionStateProvider = ({ children }) => {
    const [Questions, setQuestions] = useState([
        {
            questionId: 1,
            correctAnswerId: 0,
        },
    ]);
    const lastQuestionId = useRef(1);
    const [currentKanjiLevel, setCurrentKanjiLevel] = useState(
        paragarphLevel[0],
    );
    const [currentParagraphType, setCurrentParagraphType] = useState(
        paragarphType[0],
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
            }}
        >
            {children}
        </QuestionStateContext.Provider>
    );
};
export { QuestionStateContext, QuestionStateProvider };
