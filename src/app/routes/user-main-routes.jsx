import HomePageUser from "../features/user/home-user/page";
import AboutUs from "../features/user/aboutus-user/page";
import ReadingModulesRoutes from "./user-reading-routes";
import KanjiModulesRoutes from "./user-kanji-routes";

/** @type {import('react-router-dom').routeobject[]} */
const UserRoutes = [
    {
        index: true,
        element: <HomePageUser />,
    },
    {
        path: "reading",
        children: ReadingModulesRoutes,
    },
    {
        path: "kanji",
        children: KanjiModulesRoutes,
    },
    {
        path: "aboutus",
        element: <AboutUs />,
    },
];
export default UserRoutes;
