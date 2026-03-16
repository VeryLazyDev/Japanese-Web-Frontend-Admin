import { useContext } from "react";
import { ReadingListContext } from "../context/reading-list-provider";

const useReadingList = () => useContext(ReadingListContext);
export default useReadingList;
