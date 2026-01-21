import { createContext, useState, useContext } from "react";

import { readingQuestions } from "@/constant/readingQuestions";

const EditQuestionContext = createContext();

export const EditQuestionProvider = ({ children }) => {
  const [questionsData, setQuestionsData] = useState(readingQuestions);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [activeQuestionNo, setActiveQuestionNo] = useState(0);
  const [editQuestionSidebar, setEditQuestionSidebar] = useState(false);
  const [localParagraphEdit, setLocalParagraphEdit] = useState({
    paragraph: "",
  });
  const [localQuestionEdits, setLocalQuestionEdits] = useState([]);

  const openEdit = (questionId) => {
    const question = questionsData.find(
      (question) => question.id === questionId,
    );
    if (!question) return;

    setSelectedQuestion(question);
    setLocalParagraphEdit({
      paragraph: question.paragraph,
    });
    setLocalQuestionEdits([
      ...(question.questions.length
        ? question.questions
        : [
            { body: "", options: ["", "", "", ""], correct: 0 },
            { body: "", options: ["", "", "", ""], correct: 0 },
            { body: "", options: ["", "", "", ""], correct: 0 },
            { body: "", options: ["", "", "", ""], correct: 0 },
          ]),
    ]);
    setActiveQuestionNo(0);
    setEditQuestionSidebar(true);
  };

  const closeEdit = () => {
    setEditQuestionSidebar(false);
  };

  const handleEditParagraph = (e) => {
    setLocalParagraphEdit({
      paragraph: e.target.value,
    });
  };

  const handleEditQuestionBody = (e) => {
    const newQuestions = [...localQuestionEdits];
    newQuestions[activeQuestionNo].body = e.target.value;
    setLocalQuestionEdits(newQuestions);
  };

  const handleEditQuestionOption = (optionIndex, value) => {
    setLocalQuestionEdits((prev) => {
      const newEdit = [...prev];
      const options = [...newEdit[activeQuestionNo].options];
      options[optionIndex] = value;
      newEdit[activeQuestionNo] = {
        ...newEdit[activeQuestionNo],
        options,
      };
      return newEdit;
    });
  };

  const handleEditSelectCorrect = (optionIndex) => {
    setLocalQuestionEdits((prev) => {
      const newEdit = [...prev];
      newEdit[activeQuestionNo] = {
        ...newEdit[activeQuestionNo],
        correct: optionIndex,
      };
      return newEdit;
    });
  };

  const handleTrash = () => {
    setLocalParagraphEdit({
      paragraph: selectedQuestion?.paragraph || "",
    });
    setLocalQuestionEdits([...(selectedQuestion?.questions || [])]);
  };

  const handleSubmitAll = () => {
    if (!selectedQuestion) return;

    const updatedQuestion = {
      ...selectedQuestion,
      paragraph: localParagraphEdit.paragraph,
      questions: localQuestionEdits,
    };

    setQuestionsData((prev) =>
      prev.map((question) =>
        question.id === selectedQuestion.id ? updatedQuestion : question,
      ),
    );

    setSelectedQuestion(updatedQuestion);
    setEditQuestionSidebar(false);
  };

  return (
    <EditQuestionContext.Provider
      value={{
        questionsData,
        selectedQuestion,
        localParagraphEdit,
        localQuestionEdits,
        editQuestionSidebar,
        activeQuestionNo,
        setActiveQuestionNo,
        openEdit,
        closeEdit,
        handleEditParagraph,
        handleEditQuestionBody,
        handleEditQuestionOption,
        handleEditSelectCorrect,
        handleSubmitAll,
        handleTrash,
      }}
    >
      {children}
    </EditQuestionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEditQuestion = () => {
  const context = useContext(EditQuestionContext);
  if (!context) {
    throw new Error(
      "useEditQuestion must be used within an EditQuestionProvider.",
    );
  }
  return context;
};
