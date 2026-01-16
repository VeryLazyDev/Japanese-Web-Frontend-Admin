import HomePageHeader from "./components/header";
import QuestionSection from "./components/question_section";

const HomePage = () => {
    return (
        <div className="flex flex-row w-full h-full px-70 pt-10 bg-transparent">
            <div className="w-full">
                <HomePageHeader />
                <QuestionSection />
            </div>
            {/* <div>Here Will be the edit </div>*/}
        </div>
    );
};
export default HomePage;
