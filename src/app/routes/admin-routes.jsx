import HomePageAdminWrapper from "../features/home-admin/wrapper";
import LoginAdminWrapper from "../features/login-admin/wrapper";
import NewExercisePageWrapper from "../features/new-excercise/wrapper";

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
        element: <NewExercisePageWrapper />,
    },
];

export default AdminRoutes;
