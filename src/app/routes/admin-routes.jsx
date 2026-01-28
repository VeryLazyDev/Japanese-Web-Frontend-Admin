import HomePageAdminWrapper from "../features/home-admin/wrapper";
import NewExercisePage from "../features/new-excercise/page";
import LoginAdminWrapper from "../features/login-admin/wrapper";

/** @type {import('react-router-dom').RouteObject[]} */
const AdminRoutes = [
  {
    index: true,
    element: <HomePageAdminWrapper />,
  },
  {
    path: "login",
    element: <LoginAdminWrapper />,
  },
  {
    path: "new-exercise",
    element: <NewExercisePage />,
  },
];

export default AdminRoutes;
