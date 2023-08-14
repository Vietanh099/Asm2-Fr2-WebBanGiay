import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutWebsite from "./layouts/LayoutWebsite";
import LayoutAdmin from "./layouts/LayoutAdmin";
import AdminProduct from "./pages/admin/product";
import AdminProductAdd from "./pages/admin/product/add";
import AdminProductEdit from "./pages/admin/product/edit";
import SignIn from "./pages/Auth/Signin";
import SignUp from "./pages/Auth/Signup";
import DashBoard from "./pages/admin/product/dashboard";
import ProductDetail from "./pages/Cilent/ProductDetail";
import HomePage from "./pages/Cilent/Home";
import AdminUser from "./pages/admin/user";
import AdminUserEdit from "./pages/admin/user/edit";


export const routers = createBrowserRouter([
    { 
        path: "/", 
        element: <LayoutWebsite />,
        children:[
            {   path: "/product/:idProduct/detail", 
                element: <ProductDetail/>, 
            },
            {
                path:"/home",
                element:<HomePage/>
            }

        ]

    },

    {
        path: "/admin",
        element: <LayoutAdmin />,
        children: [
            { index: true, element: <Navigate to="dashboard" /> },
            {
                path: "dashboard",
                element: 
                <DashBoard/>,
            },
            {
                path: "product",
                element: <AdminProduct />,
            },
            {
                path: "product/add",
                element: <AdminProductAdd />,
            },
            {
                path: "product/:idProduct/edit",
                element: <AdminProductEdit />,
            },
            {
                path: "users",
                element: <AdminUser/>,
            },
            {
                path: "user/:iduser/edit",
                element: <AdminUserEdit />,
            },
        ],
    },
    {
        path: "/signin", 
        element: <SignIn/>, 
    },
    {
        path: "/signup", 
        element: <SignUp/>, 
    },

]);