import { MainLayout } from "@/constant/lazyload";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../features/home/page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
        ],
    },
]);

export default router;
