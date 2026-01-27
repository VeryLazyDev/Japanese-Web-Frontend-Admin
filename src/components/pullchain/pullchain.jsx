import { useTheme } from "@/hooks/useTheme";
import { animate } from "animejs";
import { Lightbulb } from "lucide-react";
import { useRef } from "react";

const PullChain = () => {
  const initialState = useRef(0);
  const { SwitchTheme } = useTheme();
  const onMouseDown = (e) => {
    // SwitchTheme();
    initialState.current = e.clientY;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.documentElement.classList.add("select-none");
  };

  const onMouseMove = (e) => {
    const changed = e.clientY - initialState.current;
    if (changed > 10 || changed < 0) {
      return;
    }
    animate("#pull", {
      top: -changed,
      delay: 0,
      duration: 100,
      onComplete: () => SwitchTheme(),
    });
  };
  const onMouseUp = () => {
    animate("#pull", {
      top: -40,
      delay: 0,
      duration: 100,
    });
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    document.documentElement.classList.remove("select-none");
  };
  return (
    <>
      {/* <div className="fixed top-0 left-7 items-center flex justify-center flex-col">
        <div class="h-8 w-6 border-r-2 border-b-2 border-primary rounded-br-full"></div>
        <Lightbulb className="opacity-0" />
      </div>*/}
      <div
        id="pull"
        className="fixed -top-10 left-10 flex items-center justify-center flex-col"
      >
        <div className="w-0.5 h-20 bg-primary"></div>
        <Lightbulb className="rotate-180" onMouseDown={onMouseDown} />
      </div>
    </>
  );
};
export default PullChain;
