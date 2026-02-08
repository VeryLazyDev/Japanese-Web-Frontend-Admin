import EditQuestions from "./components/edit-questions";
import HomePageHeader from "./components/header";
import QuestionSection from "./components/questions-section";

const HomePageAdmin = () => {
<<<<<<< HEAD
    // <<<<<<< HEAD
    //   return (
    //     <div className="flex flex-row w-full h-full px-4 lg:px-40 md:px-20 pt-10 overflow-auto">
    //       <div className="w-full h-full">
    //         <HomePageHeader />
    //         <QuestionSection />
    //       </div>

    //       {/* This is the edit question section */}
    //       <EditQuestions />
    //     </div>
    //   );
    // =======
    return (
        <div className="flex flex-row w-full h-full px-4 lg:px-40 md:px-20 pt-10 bg-transparent">
            <div className="w-full">
                <HomePageHeader />
                <QuestionSection />
            </div>

            {/* This is the edit question section */}
            <EditQuestions />
        </div>
    );
    // >>>>>>> 3299204 (add)
=======
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
>>>>>>> f5ba93a (Add setting for loading furigana data)
};
export default HomePageAdmin;
