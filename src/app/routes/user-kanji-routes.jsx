import { KanjiLevels } from "@/constant/levels";
import LevelSelectPage from "../features/user/level-select-page/page";
import KanjiModulesPage from "../features/user/kanji-modules-page/page";
import { Navigate } from "react-router-dom";

/** @type {import('react-router-dom').routeobject[]} */
const KanjiModulesRoutes = [
    {
        index: true,
        element: <Navigate to={"/kanji/levels"} replace />,
    },
    {
        path: "modules",
        element: <KanjiModulesPage />,
    },
    {
        path: "levels",
        element: (
            <LevelSelectPage title={"Kanji Master"} levels={KanjiLevels} />
        ),
    },
    {
        path: "list",
    },
    {
        path: "speedrun",
    },
];
export default KanjiModulesRoutes;
