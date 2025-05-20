import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Banner from "./Banner";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "../pages/Home";
import DemoCards from "./DemoCards";
import CreateGroup from "../pages/CreateGroup";
import AllGroups from "../pages/AllGroups";
import GroupDetails from "../pages/GroupDetails";
import PrivateRoute from "../AuthProvider/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:3000/groups'),
                Component: Home
            },
            {
                path: '/all-groups',
                loader: () => fetch('http://localhost:3000/groups'),
                Component: AllGroups
            },
            {
                path: '/createGroup',
                element: <PrivateRoute>
                    <CreateGroup></CreateGroup>
                </PrivateRoute>
            },
            {
                path: '/myGroups',
                element: <PrivateRoute>
                    <DemoCards></DemoCards>
                </PrivateRoute>
            },
            ,
            {
                path: '/group/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/group/${params.id}`),
                Component: GroupDetails
            },
            {
                path: '/SignIn',
                Component: SignIn
            },
            {
                path: '/signUp',
                Component: SignUp
            }
        ]
    }
]);
