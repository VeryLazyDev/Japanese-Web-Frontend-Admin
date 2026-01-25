import HomePageAdminWrapper from "../features/home-admin/wrapper";
import LoginAdminPage from "../features/login-admin/page";
import NewExercisePage from "../features/new-excercise/page";

/** @type {import('react-router-dom').RouteObject[]} */
const AdminRoutes = [
  {
    index: true,
    element: <HomePageAdminWrapper />,
  },
  {
    path: "new-exercise",
    element: <NewExercisePage />,
  },
];

export default AdminRoutes;
