import { animate } from "animejs";
import { createContext } from "react";

const AnimationContext = createContext({});

const AnimationProvider = ({ children }) => {
    const hoverModuleCardAnimation = {
        onMouseEnter: (e) => {
            animate(e.currentTarget, {
                scale: 1.06,
                y: [0, 20, -5],
                duration: 100,
                delay: 0,
                zIndex: 1000,
                ease: "inBounce",
            });
        },
        //This set back to the original state
        onMouseLeave: (e) => {
            animate(e.currentTarget, {
                scale: 1,
                delay: 0,
                y: 0,
                zIndex: 10,
                duration: 0,
                ease: "inBounce",
            });
        },
    };

    return (
        <AnimationContext.Provider
            value={{
                hoverModuleCardAnimation,
            }}
        >
            {children}
        </AnimationContext.Provider>
    );
};
export { AnimationContext, AnimationProvider };
