import HomePageUser from "../features/user/home-user/page";
import ReadingModulePage from "../features/user/reading-modules-user/page";
import AboutUs from "../features/user/aboutus-user/page";
// import HomeUserWrapper from "../features/home-user/wrapper";
import LevelSelectPage from "../features/user/level-select-page/page";
import { ReadingLevels, KanjiLevels } from "@/constant/levels";
import KanjiModulesPage from "../features/user/kanji-modules-page/page";

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
        path: "/kanji-modules",
        element: <KanjiModulesPage />,
    },
    {
        path: "/aboutus",
        element: <AboutUs />,
    },
    {
        path: "/reading-levels",
        element: (
            <LevelSelectPage title={"Reading Master"} levels={ReadingLevels} />
        ),
    },
    {
        path: "/kanji-levels",
        element: (
            <LevelSelectPage title={"Kanji Master"} levels={KanjiLevels} />
        ),
    },
];
export default UserRoutes;
