import { useEditQuestion } from "../hooks/useEditQuestions";
import QuestionCard from "./question-card";

const QuestionList = () => {
    const { questionsData } = useEditQuestion();
    return (
        <>
            <div className="mt-5 grid grid-cols-3 max-md:grid-cols-2 grid-rows-3 gap-2 bg-transparent">
                {questionsData.map((item) => (
                    <QuestionCard
                        key={item.id}
                        id={item.id}
                        paragraph={item.paragraph}
                    />
                ))}
            </div>
        </>
    );
};
export default QuestionList;
