// homeRoutes.tsx
import { lazy } from "react";
import AppLayout from "@/components/layout/MainLayout";

const Home = lazy(() => import("@/pages/Home"));

const mainRoutes = [
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <Home /> },
        ],
    },
];

export default mainRoutes;
