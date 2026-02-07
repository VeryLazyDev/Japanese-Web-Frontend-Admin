import { useContext } from "react";
import { FuriganaContext } from "../context/furigana-provider";
const useFurigana = () => useContext(FuriganaContext);
export default useFurigana;
