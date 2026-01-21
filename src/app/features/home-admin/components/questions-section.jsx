import QuestionFilter from "./questions-filter";
import QuestionList from "./questions-list";

const QuestionSection = () => {
  return (
    <section className="bg-transparent">
      <QuestionFilter />
      <QuestionList></QuestionList>
    </section>
  );
};
export default QuestionSection;
