import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Banner from "./Banner";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "../pages/Home";
import DemoCards from "./DemoCards";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/groups',
                Component: DemoCards
            },
            {
                path: '/createGroup',
                Component: DemoCards
            },
            {
                path: '/myGroups',
                Component: DemoCards
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/signUp',
                Component: SignUp
            }
        ]
    }
]);
