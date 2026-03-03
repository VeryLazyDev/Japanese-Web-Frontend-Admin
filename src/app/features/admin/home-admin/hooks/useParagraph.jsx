import { useContext } from "react";
import { ParagraphContext } from "../context/paragraph-provider";

const useParagraph = () => useContext(ParagraphContext);
export default useParagraph;
