import HomePageHeader from "./components/header";
import QuestionSection from "./components/question_section";
import EditQuestionSection from "./components/editQuestion_section";
import {
  EditQuestionProvider,
  useEditQuestion,
} from "@/app/features/hooks/editContext";

const HomePageContent = () => {
  const { editQuestionSidebar, closeEdit } = useEditQuestion();
  return (
    <div className="flex flex-row w-full h-full px-70 pt-10 bg-transparent">
      <div className="w-full">
        <HomePageHeader />
        <QuestionSection />
      </div>
      {/* <div>Here Will be the edit </div>*/}
      {editQuestionSidebar && (
        <div
          onClick={closeEdit}
          className="fixed inset-0 bg-black/30 z-40"
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 z-50 h-screen bg-primary-bg shadow-lg transition-all duration-200 overflow-hidden ${editQuestionSidebar ? "w-130 ml-10" : "w-0"}
        `}
      >
        <EditQuestionSection />
      </div>
    </div>
  );
};

const HomePageAdmin = () => {
  return (
    <EditQuestionProvider>
      <HomePageContent />
    </EditQuestionProvider>
  );
};
export default HomePageAdmin;
