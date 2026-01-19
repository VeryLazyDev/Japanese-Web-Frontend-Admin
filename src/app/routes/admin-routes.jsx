import HomePageAdmin from "../features/home-admin/page";
import LoginAdminPage from "../features/login-admin/page";

/** @type {import('react-router-dom').RouteObject[]} */
const AdminRoutes = [
  {
    index: true,
    element: <HomePageAdmin />,
  },
];

export default AdminRoutes;
