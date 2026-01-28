import { readingQuestions } from "@/constant/readingQuestions";
import { animate, stagger } from "animejs";
import { createContext } from "react";
import { useState } from "react";

const EditQuestionContext = createContext({});
const EditQuestionProvider = ({ children }) => {
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
      paragraph: selectedQuestion.paragraph || "",
    });
    setLocalQuestionEdits([...(selectedQuestion.questions || [])]);
    animate("#question-id-" + selectedQuestion.id, {
      y: [-50, 1500],
      x: [0, 300],
      rotate: [0, -10, 45],
      // opacity: [1, 0],
      duration: 800,
      onComplete: closeEdit,
    });
    // animate("#question-id-" + selectedQuestion.id, {
    //   translateY: [-50, 0], // Start 50px above, end at original position
    //   // opacity: [0, 1], // Fade in
    //   delay: stagger(100), // Delay each element by 100ms
    //   easing: "easeOutElastic(1, .6)", // Optional: adding a bounce
    // });
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
export { EditQuestionContext, EditQuestionProvider };
