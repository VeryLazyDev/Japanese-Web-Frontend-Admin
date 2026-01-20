import { useEditQuestion } from "../../hooks/editContext";

const EditQuestionSection = ({ id, title }) => {
  const { selectedQuestion } = useEditQuestion();
  return (
    <section>
      <div>
        <p>問題 {id}</p> <button>Close</button>
      </div>
      <div>
        <p>Edit Paragraphs</p>
        <textarea name="" id="">
          {title}
        </textarea>
      </div>
      <div>
        <p>Edit Questions</p>
        <div>
          <div>
            <p>Question Text</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
          <textarea name="" id=""></textarea>
        </div>
        <div>
          <p>Answer Options</p>
          {[1, 2, 3, 4].map((answer) => (
            <div key={answer}>
              <input type="text" placeholder={`Option ${answer}`} />
              <input type="radio" name="Correct" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditQuestionSection;
