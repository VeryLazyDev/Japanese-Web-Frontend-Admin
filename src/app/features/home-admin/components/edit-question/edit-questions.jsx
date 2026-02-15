import { useEditQuestion } from "../../hooks/useEditQuestions";
import EditQuestionSection from "./edit-questions-section";

const EditQuestions = () => {
  const { editQuestionSidebar, closeEdit } = useEditQuestion();
  return (
    <>
      {editQuestionSidebar && (
        <div
          onClick={closeEdit}
          className={`fixed inset-0 bg-black/30 z-40`}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 z-50 h-screen transition-all duration-200
          overflow-hidden p-5 w-120 max-w-full ${editQuestionSidebar ? "translate-x-0" : "translate-x-full"}
              `}
      >
        <EditQuestionSection />
      </div>
    </>
  );
};
export default EditQuestions;
