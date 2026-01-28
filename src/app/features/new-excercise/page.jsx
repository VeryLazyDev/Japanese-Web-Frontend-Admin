import AddParagraph from "./components/add-paragraph";
import AddParagraphQuestions from "./components/add-paragraph-questions";

const NewExercisePage = () => {
  return (
    <>
      <div className="flex justify-center bg-transparent w-full h-auto  p-10">
        <div className="bg-transparent w-3/4">
          <div className="bg-transparent w-full h-auto">
            <h1 className="font-inter font-semibold w-auto pb-3">
              Creat New Exercise
            </h1>
          </div>
          <AddParagraph />
          <AddParagraphQuestions />
          <div className="py-3">
            <button className="w-full bg-purple-200 text-purple-700 rounded-md text-sm h-8 font-inter">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewExercisePage;
