// appRoutes.tsx
import AppLayout from "@/components/layout/AppLayout";
import { lazy } from "react";

const Products = lazy(() => import("@/pages/Products"));
const Cart = lazy(() => import("@/pages/Cart"));
const Profile = lazy(() => import("@/pages/Profile"));

const appRoutes = [
    {
        element: <AppLayout />,
        children: [
            { path: "/products", element: <Products /> },
            { path: "/products/:id", element: <Products /> },
            { path: "/cart", element: <Cart /> },
            { path: "/profile", element: <Profile /> },
        ],
    },
];

export default appRoutes;
