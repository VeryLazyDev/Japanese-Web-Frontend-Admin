import HomePageUser from "../features/home-user/page";
import ReadingModulePage from "../features/reading-modules-user/page";
import AboutUs from "../features/aboutus-user/page";
import HomeUserWrapper from "../features/home-user/wrapper";
import LevelSelectPage from "../features/level-select-page/page";
import { ReadingLevels, KanjiLevels } from "@/constant/levels";

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
        element: <LevelSelectPage title={"Reading Master"} levels={ReadingLevels}/>,
    },
    {
        path: "/kanji-levels",
        element: <LevelSelectPage title={"Kanji Master"} levels={KanjiLevels}/>,
    },
];
export default UserRoutes;
