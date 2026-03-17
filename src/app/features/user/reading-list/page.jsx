import BackHeader from "../reading-modules-user/components/back-header";
import FilterBar from "./components/filter-bar";
import Pagination from "./components/pagination";
import ParagraphList from "./components/paragraph-list";

const ReadingListPage = () => {
    return (
        <div className="bg-transparent w-full h-screen ">
            <BackHeader title={"Reading Lists"}></BackHeader>
            <div className="w-full h-full flex flex-col gap-4 relative">
                <FilterBar />
                <ParagraphList />
                <Pagination />
            </div>
        </div>
    );
};
export default ReadingListPage;
