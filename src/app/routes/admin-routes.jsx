import HomePageAdminWrapper from "../features/home-admin/wrapper";
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
];

export default AdminRoutes;
