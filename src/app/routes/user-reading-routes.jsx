import { ReadingLevels } from "@/constant/levels";
import ReadingModulePage from "../features/user/reading-modules-user/page";
import LevelSelectPage from "../features/user/level-select-page/page";
import { Navigate } from "react-router-dom";
import ReadingListPageWrapper from "../features/user/reading-list/wrapper";

/** @type {import('react-router-dom').routeobject[]} */
const ReadingModulesRoutes = [
    {
        index: true,
        element: <Navigate to={"/reading/levels"} replace />,
    },
    {
        path: "modules",
        element: <ReadingModulePage />,
    },
    {
        path: "levels",
        element: (
            <LevelSelectPage title={"Reading Master"} levels={ReadingLevels} />
        ),
    },
    {
        path: "list",
        element: <ReadingListPageWrapper />,
    },
    {
        path: "speedrun",
    },
];
export default ReadingModulesRoutes;
