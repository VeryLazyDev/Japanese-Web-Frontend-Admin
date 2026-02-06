import { EditQuestionProvider } from "./context/edit-provider";
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
};
export default HomePageAdminWrapper;
