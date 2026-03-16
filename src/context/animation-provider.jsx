import { animate, utils } from "animejs";
import { createContext } from "react";

const AnimationContext = createContext({
    hoverModuleCardAnimation: {
        onMouseEnter: () => {},
        onMouseLeave: () => {},
    },
});

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
        utils.remove(".dark");
        utils.remove(".light");
        const dark = theme === "dark";
        animate(".dark-switch", {
            rotate: dark ? [-0, -90] : [90, 0],
            duration: 100,
            delay: dark ? 0 : 100,
            opacity: dark ? 0 : 100,
            // class: "text-primary absolute dark-switch",
            x: 0,
            y: 0,
        });
        const light = theme === "light";
        animate(".light-switch", {
            rotate: light ? [-0, -90] : [90, 0],
            duration: 100,
            delay: light ? 0 : 100,
            opacity: light ? 0 : 100,
            // class: "text-primary absolute light-switch",
            x: 0,
            y: 0,
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
