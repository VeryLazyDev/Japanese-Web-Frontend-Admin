import { useEditQuestion } from "../../hooks/editContext";
import QuestionCard from "./question-card";
import { readingQuestions } from "@/constant/readingQuestions";

const QuestionList = () => {
  const { questionsData } = useEditQuestion();
  return (
    <>
      <div className="mt-5 grid grid-cols-3 grid-rows-3 gap-2 bg-transparent">
        {questionsData.map((item) => (
          <QuestionCard key={item.id} id={item.id} paragraph={item.paragraph} />
        ))}
      </div>
    </>
  );
};
export default QuestionList;
