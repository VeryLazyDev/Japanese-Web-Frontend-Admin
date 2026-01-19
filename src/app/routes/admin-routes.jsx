import HomePageAdmin from "../features/home-admin/page";

/** @type {import('react-router-dom').RouteObject[]} */
const AdminRoutes = [
    {
        index: true,
        element: <HomePageAdmin />,
    },
];

export default AdminRoutes;
