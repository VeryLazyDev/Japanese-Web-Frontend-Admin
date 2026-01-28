import EditQuestions from "./components/edit-questions";
import HomePageHeader from "./components/header";
import QuestionSection from "./components/questions-section";

const HomePageAdmin = () => {
    return (
        <div className="flex flex-row w-full h-full px-10 lg:px-40 md:px-20 pt-10 bg-transparent">
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
