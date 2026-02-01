import { useContext } from "react";
import { LevelContext } from "@/context/level-provider";

const useLevel = () => useContext(LevelContext);
export default useLevel;
