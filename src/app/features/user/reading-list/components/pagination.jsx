import { ChevronLeft, ChevronRight } from "lucide-react";
import useReadingList from "../hooks/userReadingList";

const Pagination = () => {
    const buttonStyle =
        "p-1 bg-primary/10 rounded hover:bg-primary/20 active:bg-primary/30 disabled:text-primary/40 disabled:bg-primary/10";
    const { filter, readingsDataMeta, changePage } = useReadingList();
    return (
        <div
            className="flex flex-row gap-4 fixed bottom-5 right-0 w-full items-center justify-center"
            onClick={() => {
                if (filter.page > 0) changePage(filter.page - 1);
            }}
        >
            <button className={`${buttonStyle}`} disabled={filter.page === 0}>
                <ChevronLeft />
            </button>
            <div className="px-4 py-1 bg-primary/10 rounded select-none">
                {filter.page + 1}
            </div>
            <button
                className={`${buttonStyle}`}
                disabled={readingsDataMeta?.pagination?.isLast}
                onClick={() => {
                    changePage(filter.page + 1);
                }}
            >
                <ChevronRight />
            </button>
        </div>
    );
};
export default Pagination;
