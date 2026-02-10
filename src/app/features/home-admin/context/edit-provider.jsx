import { createContext } from "react";
import useParagraph from "../hooks/useParagraph";
import { useState } from "react";

const EditQuestionContext = createContext({});
const EditQuestionProvider = ({ children }) => {
  const { paragraphList } = useParagraph();
  const [editQuestionSidebar, setEditQuestionSidebar] = useState(false);
  const [selectedParagraph, setSelectedParagraph] = useState(null);
  const [previewMode, setPreviewMode] = useState("code");
  const [activeQuestionNo, setActiveQuestionNo] = useState(0);
  const openEdit = (paragraphId) => {
    const paragraph = paragraphList.find(
      (paragraph) => paragraph.id === paragraphId,
    );
    if (!paragraph) return;
    setSelectedParagraph(paragraph);
    setActiveQuestionNo(paragraph.questionList[0]?.id || 0);
    setEditQuestionSidebar(true);
  };
  const closeEdit = () => {
    setEditQuestionSidebar(false);
    setSelectedParagraph(null);
  };
  const handleDeleteQuestion = (questionId) => {};

  return (
    <EditQuestionContext.Provider
      value={{
        openEdit,
        closeEdit,
        editQuestionSidebar,
        selectedParagraph,
        handleDeleteQuestion,
        previewMode,
        setPreviewMode,
        activeQuestionNo,
        setActiveQuestionNo,
      }}
    >
      {children}
    </EditQuestionContext.Provider>
  );
};
export { EditQuestionContext, EditQuestionProvider };
