import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useSearchParams } from "react-router-dom";

const ReadingListContext = createContext({
    paraType: "Short",
    changeParaType: () => {},
    readingsData: [],
    changePage: () => {},
    refetch: () => {},
    filter: {
        paraType: "Short",
        level: "N5",
        size: 10,
        page: 0,
    },
    readingsDataMeta: {
        pagination: {
            pageNumber: 0,
            size: 0,
            totalElement: 0,
            totalPages: 1,
            isLast: false,
        },
    },
});
const ReadingListProvider = ({ children }) => {
    const [params] = useSearchParams();
    const [filter, setFilter] = useState({
        paraType: "Short",
        level: params.get("level"),
        size: 10,
        page: 0,
    });
    const { data: readingsData, refetch } = useQuery({
        queryKey: ["reading-data"],
        queryFn: () => FetchReadingsData(filter),
    });
    useEffect(() => {
        refetch();
    }, [filter]);
    const changeParaType = (newParagraphType) => {
        setFilter((prev) => ({ ...prev, paraType: newParagraphType }));
    };
    const changePage = (/**@type {number} **/ pageNumber) => {
        setFilter((prev) => ({ ...prev, page: pageNumber }));
    };
    return (
        <ReadingListContext.Provider
            value={{
                paraType: filter.paraType,
                changeParaType,
                readingsData: readingsData?.content || [],
                refetch,
                changePage,
                filter,
                readingsDataMeta: readingsData?.metadata || {},
            }}
        >
            {children}
        </ReadingListContext.Provider>
    );
};

async function FetchReadingsData(filter) {
    var query = `?page=${filter.page}&size=${filter.size}&level=${filter.level}&paragraphType=${filter.paraType.toUpperCase()}`;
    const { data } = await axios.get(
        "https://proxy.phyoheinko.com?https://api-muda-zero.nyinyimyintmyat.com/japanese-app/api/v1/paragraph/all" +
            query,
    );
    return data;
}

export { ReadingListContext, ReadingListProvider };
