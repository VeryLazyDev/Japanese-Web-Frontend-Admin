import { useEditQuestion } from "../hooks/useEditQuestions";
import useParagraph from "../hooks/useParagraph";
import QuestionCard from "./question-card";

const QuestionList = () => {
  const { questionsData } = useEditQuestion();
  const { data } = useParagraph();
  return (
    <>
      <div className="overflow-auto">
        <div className="mt-5 grid grid-cols-3 max-md:grid-cols-2 grid-rows-3 gap-2 h-fit pb-5">
          {data &&
            data.content.map((item) => (
              <QuestionCard
                key={item.id}
                id={item.id}
                paragraph={item.paragraph}
              />
            ))}
        </div>
      </div>
    </>
  );
};
export default QuestionList;
