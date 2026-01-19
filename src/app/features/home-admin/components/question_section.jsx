import QuestionFilter from "./questions_filter";
import QuestionList from "./questions_list";

const QuestionSection = () => {
    return (
        <section className="bg-transparent">
            <QuestionFilter />
            <QuestionList></QuestionList>
        </section>
    );
};
export default QuestionSection;
