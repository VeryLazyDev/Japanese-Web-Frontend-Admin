import HomePageUser from "../features/home-user/page";
import NewExercisePage from "../features/new-excercise/page";
import ReadingModulePage from "../features/reading-modules-user/page";
import AboutUs from "../features/aboutus-user/page";
import HomeUserWrapper from "../features/home-user/wrapper";
import ReadingLevelSelect from "../features/reading-level-select/page";

/** @type {import('react-router-dom').RouteObject[]} */
const UserRoutes = [
    {
        index: true,
        element: <HomePageUser />,
    },
    {
        path: "/reading-modules",
        element: <ReadingModulePage />,
    },
    {
        path: "/aboutus",
        element: <AboutUs />,
    },
    {
        path: "/reading-levels",
        element: <ReadingLevelSelect />,
    },
];
export default UserRoutes;
