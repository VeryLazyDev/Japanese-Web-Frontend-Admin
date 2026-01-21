import { createContext } from "react";

const EditQuestionContext = createContext({
  questionsData: null,
  selectedQuestions: null,
  localParagraphEdit: null,
  localQuestionEdit: null,
  editQuestionSidebar: null,
  activeQuestionNo: null,
  setActiveQuestionNo: null,
  openEdit: () => null,
  closeEdit: () => null,
  handleEditParagraph: null,
  handleEditQuestionBody: null,
  handleEditQuestionOption: null,
  handleEditSelectCorrect: null,
  handleSubmitAll: null,
  handleTrash: null,
});
export default EditQuestionContext;
