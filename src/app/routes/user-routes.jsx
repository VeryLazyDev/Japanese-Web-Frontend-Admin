import HomePageUser from "../features/home-user/page";
import NewExercisePage from "../features/new_excercise/page";

/** @type {import('react-router-dom').RouteObject[]} */
const UserRoutes = [
  {
    index: true,
    element: <HomePageUser />,
  },
  {
    path: "/reading-module",
    element: <NewExercisePage />,
  },
];
export default UserRoutes;
