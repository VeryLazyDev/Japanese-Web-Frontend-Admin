import AddParagraph from "./components/add-paragraph";
import AddParagraphQuestions from "./components/add-paragraph-questions";
import useNewExercise from "./hooks/useNewExercise.js";

const NewExercisePage = () => {
  const { handleSubmitExercise } = useNewExercise();
  return (
    <>
      <div className="flex flex-col gap-2 justify-center bg-transparent w-full h-auto overflow-auto px-4 lg:px-50 md:px-20 pt-12">
        {/* <div className="bg-transparent w-3/4">*/}
        <div className="bg-transparent w-full h-auto">
          <h1 className="font-inter font-semibold w-auto pb-3">
            Creat New Exercise
          </h1>
        </div>
        <form
          onSubmit={handleSubmitExercise}
          className="flex w-full h-full flex-col pb-10"
        >
          <AddParagraph />
          <AddParagraphQuestions />
          <button className="w-full  bg-purple-200 text-purple-700 rounded-md text-sm font-inter my-3 py-2">
            Submit
          </button>
        </form>
      </div>
      {/* </div>*/}
    </>
  );
};

export default NewExercisePage;
