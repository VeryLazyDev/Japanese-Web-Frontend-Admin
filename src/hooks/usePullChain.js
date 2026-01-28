import { animate } from "animejs";
import { useRef } from "react";
import { useTheme } from "./useTheme";

const usePullChain = () => {
    const initialState = useRef(0);
    const { SwitchTheme, theme } = useTheme();
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

    const onTouchStart = (e) => {
        // SwitchTheme();
        initialState.current = e.touches[0].clientY;
        document.addEventListener("touchmove", onTouchMove);
        document.addEventListener("touchend", onTouchEnd);
        document.documentElement.classList.add("select-none");
    };

    const onTouchMove = (e) => {
        const changed = e.touches[0].clientY - initialState.current;
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
    const onTouchEnd = () => {
        animate("#pull", {
            top: -40,
            delay: 0,
            duration: 100,
        });
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onTouchEnd);
        document.documentElement.classList.remove("select-none");
    };

    return { onMouseDown, onTouchStart, theme };
};
export default usePullChain;
