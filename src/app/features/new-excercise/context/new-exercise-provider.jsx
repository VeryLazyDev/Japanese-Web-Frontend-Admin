import { useMutation } from "@tanstack/react-query";
import { createContext } from "react";
import useQuestionState from "../hooks/userQuestionState";
import axios from "axios";
const NewExerciseContext = createContext();

const createExercise = async (data) => {
    // <<<<<<< HEAD
    console.log(data);
    const { data: res } = await axios.post(
        "https://api-muda-zero.nyinyimyintmyat.com/japanese-app/api/v1/paragraph/create",
        data,
        { headers: { setContentType: "application/json" } },
    );
    return res;
};
// const createExerciseSuccess = (res) => {
//     alert("New Question Added Successfully");
//     console.log("Server says" + res);
// };
// const createExerciseError = () => {};
// const NewExerciseProvider = ({ children }) => {
//     const { Questions, currentParagraphType, currentKanjiLevel } =
//         useQuestionState();
//     const { mutate } = useMutation({
//         mutationFn: createExercise,
//         onSuccess: createExerciseSuccess,
//         onError: createExerciseError,
//         // onMutate: onMutate,
//     });
//     const handleSubmitExercise = (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         const questionList = QuestionBuilder(formData);
//         const data = {
//             id: 0,
//             paragraph: formData.get("paragraph"),
//             paragraphType: currentParagraphType.value.toUpperCase(),
//             japaneseLevel: currentKanjiLevel.value.toUpperCase(),
//             questionList,
//         };
//         mutate(data);
//     };
//     const QuestionBuilder = (formData) => {
//         const questionTexts = Questions.map((item) => {
//             const questionText = formData.get("question-" + item.questionId);
//             const answers = Array.from({ length: 4 }).map((_, id) => {
//                 const answer = formData.get(
//                     "question-" + item.questionId + "-answer-" + id,
//                 );
//                 return {
//                     id: id,
//                     answer,
//                     correct_answer: id === item.correctAnswerId,
//                 };
//             });
//             return {
//                 id: item.questionId,
//                 question: questionText,
//                 answerList: answers,
//             };
//         });

//         return questionTexts.filter(
//             (item) => item.questionText !== "" && item.questionText !== null,
//         );
//     };
//     return (
//         <NewExerciseContext.Provider value={{ handleSubmitExercise }}>
//             {children}
//         </NewExerciseContext.Provider>
//     );
// };
const createExerciseSuccess = (res) => {
    console.log("Server says" + res);
};
const createExerciseError = () => {};
const NewExerciseProvider = ({ children }) => {
    const { Questions, currentParagraphType, currentKanjiLevel } =
        useQuestionState();
    const { mutate } = useMutation({
        mutationFn: createExercise,
        onSuccess: createExerciseSuccess,
        onError: createExerciseError,
        // onMutate: onMutate,
    });
    const handleSubmitExercise = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const questionList = QuestionBuilder(formData);
        const data = {
            id: 0,
            paragraph: formData.get("paragraph"),
            paragraphType: currentParagraphType.value.toUpperCase(),
            japaneseLevel: currentKanjiLevel.value.toUpperCase(),
            questionList,
        };
        mutate(data);
    };
    const QuestionBuilder = (formData) => {
        const questionTexts = Questions.map((item) => {
            const questionText = formData.get("question-" + item.questionId);
            const answers = Array.from({ length: 4 }).map((_, id) => {
                const answer = formData.get(
                    "question-" + item.questionId + "-answer-" + id,
                );
                return {
                    id: id,
                    answer,
                    correct_answer: id === item.correctAnswerId,
                };
            });
            return {
                id: item.questionId,
                question: questionText,
                answerList: answers,
            };
        });

        return questionTexts.filter(
            (item) => item.questionText !== "" && item.questionText !== null,
        );
        // >>>>>>> 3299204 (add)
    };
    return (
        <NewExerciseContext.Provider value={{ handleSubmitExercise }}>
            {children}
        </NewExerciseContext.Provider>
    );
};
export { NewExerciseContext, NewExerciseProvider };
