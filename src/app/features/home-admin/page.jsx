import EditQuestions from "./components/edit-question/edit-questions";
import HomePageHeader from "./components/header";
import QuestionSection from "./components/questions-section";

const HomePageAdmin = () => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="w-full">
        <HomePageHeader />
        <QuestionSection />
      </div>

      {/* This is the edit question section */}
      <EditQuestions />
    </div>
  );
};
export default HomePageAdmin;
