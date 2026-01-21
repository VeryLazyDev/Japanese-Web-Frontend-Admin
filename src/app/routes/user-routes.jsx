import HomePageUser from "../features/home-user/page";
import NewExercisePage from "../features/new-excercise/page";
import ReadingModulePage from "../features/reading-modules-user/page";

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
];
export default UserRoutes;
