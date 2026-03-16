import BackHeader from "../reading-modules-user/components/back-header";
import FilterBar from "./components/filter-bar";
import ParagraphList from "./components/paragraph-list";

const ReadingListPage = () => {
    return (
        <div className="bg-transparent w-full h-auto">
            <BackHeader title={"Reading Lists"}></BackHeader>
            <div className="w-full flex flex-col gap-4">
                <FilterBar />
                <ParagraphList />
            </div>
        </div>
    );
};
export default ReadingListPage;
