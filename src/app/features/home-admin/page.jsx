import HomePageHeader from "./components/header";
import QuestionSection from "./components/question_section";
import EditQuestionSection from "./components/editQuestion_section";
import {
  EditQuestionProvider,
  useEditQuestion,
} from "@/app/features/hooks/editContext";

const HomePageContent = () => {
  const { editQuestionSidebar } = useEditQuestion();
  return (
    <EditQuestionProvider>
      <div className="flex flex-row w-full h-full px-70 pt-10 bg-transparent">
        <div className="w-full">
          <HomePageHeader />
          <QuestionSection />
        </div>
        {/* <div>Here Will be the edit </div>*/}
        <div
          className={`transition-all duration-200 overflow-hidden ${editQuestionSidebar ? "w-100 ml-10 opacity-10" : "w-0 opacity-0"}
        `}
        >
          <EditQuestionSection />
        </div>
        ;
      </div>
    </EditQuestionProvider>
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
