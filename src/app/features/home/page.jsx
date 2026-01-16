import HomePageHeader from "./components/header";
import QuestionSection from "./components/question_section";

const HomePage = () => {
    return (
        <div className="flex flex-row w-full h-full">
            <div className="w-full">
                <HomePageHeader />
                <QuestionSection />
            </div>
            {/* <div>Here Will be the edit </div>*/}
        </div>
    );
};
export default HomePage;
