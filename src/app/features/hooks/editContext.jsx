import { createContext, useState, useContext } from "react";

const EditQuestionContext = createContext();

export const EditQuestionProvider = ({ children }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [editQuestionSidebar, setEditQuestionSidebar] = useState(false);

  const openEdit = (questionData) => {
    setSelectedQuestion(questionData);
    setEditQuestionSidebar(true);
  };
  const closeEdit = () => {
    setEditQuestionSidebar(false);
  };

  const handleEditParagraph = (e) => {
    setSelectedQuestion((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };

  return (
    <EditQuestionContext.Provider
      value={{
        editQuestionSidebar,
        selectedQuestion,
        openEdit,
        closeEdit,
        handleEditParagraph,
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
