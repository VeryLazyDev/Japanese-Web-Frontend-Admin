import { paragarphLevel, paragarphType } from "@/constant/paragraph-data";
import { createContext, useRef, useState } from "react";
const QuestionStateContext = createContext();
<<<<<<< HEAD
=======
const GetFuriganaData = async (FuriganaLoaded) => {
  // if (FuriganaLoaded) return [];
  // const { data } = await axios("/IndexedJmdictFurigana.json");
  // const { data: data2 } = await axios("/IndexedJmnedictFurigana.json");
  // const AllKanjiFurigana = [...data, ...data2];
  // return { data: AllKanjiFurigana };
};
>>>>>>> f5ba93a (Add setting for loading furigana data)
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
