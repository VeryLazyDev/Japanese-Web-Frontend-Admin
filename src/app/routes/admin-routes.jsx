import HomePageAdminWrapper from "../features/home-admin/wrapper";
import LoginAdminPage from "../features/login-admin/page";

/** @type {import('react-router-dom').RouteObject[]} */
const AdminRoutes = [
  {
    index: true,
    element: <HomePageAdminWrapper />,
  },
];

export default AdminRoutes;
