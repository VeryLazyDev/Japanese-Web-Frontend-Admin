import { EditQuestionProvider } from "./context/edit-provider";
import HomePageAdmin from "./page";

const HomePageAdminWrapper = () => {
    return (
        <EditQuestionProvider>
            <HomePageAdmin />
        </EditQuestionProvider>
    );
};
export default HomePageAdminWrapper;
