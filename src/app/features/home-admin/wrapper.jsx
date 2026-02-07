import { EditQuestionProvider } from "./context/edit-provider";
// <<<<<<< HEAD
import { ParagraphProvider } from "./context/paragraph-provider";
import HomePageAdmin from "./page";

const HomePageAdminWrapper = () => {
    return (
        <ParagraphProvider>
            <EditQuestionProvider>
                <HomePageAdmin />
            </EditQuestionProvider>
        </ParagraphProvider>
    );
    // =======
    // import HomePageAdmin from "./page";

    // const HomePageAdminWrapper = () => {
    //     return (
    //         <EditQuestionProvider>
    //             <HomePageAdmin />
    //         </EditQuestionProvider>
    //     );
    // >>>>>>> 3299204 (add)
};
export default HomePageAdminWrapper;
