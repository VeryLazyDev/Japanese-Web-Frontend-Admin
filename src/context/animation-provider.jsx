import { animate } from "animejs";
import { createContext } from "react";

const AnimationContext = createContext({});

const AnimationProvider = ({ children }) => {
    const hoverModuleCardAnimation = {
        onMouseEnter: (e) => {
            animate(e.currentTarget, {
                scale: 1.01,
                y: [0, 20, -5],
                duration: 10,
                delay: 0,
                zIndex: 20,
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

    const switchThemeAnimation = (theme) => {
        animate("#" + theme, {
            rotate: 90,
            duration: 100,
            opacity: [0, 100],
        });
        animate("#" + theme, {
            rotate: 90,
        });
    };

    return (
        <AnimationContext.Provider
            value={{
                hoverModuleCardAnimation,
                switchThemeAnimation,
            }}
        >
            {children}
        </AnimationContext.Provider>
    );
};
export { AnimationContext, AnimationProvider };
