import { ReadingListProvider } from "./context/reading-list-provider";
import ReadingListPage from "./page";

const ReadingListPageWrapper = () => {
    return (
        <ReadingListProvider>
            <ReadingListPage />
        </ReadingListProvider>
    );
};

export default ReadingListPageWrapper;
