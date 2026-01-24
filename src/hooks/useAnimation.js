import { useContext } from "react";
import { AnimationContext } from "../context/animation-provider";

const useAnimation = () => useContext(AnimationContext);
export default useAnimation;
