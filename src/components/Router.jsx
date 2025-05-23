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
import MyGroup from "../pages/MyGroup";
import UpdateGroup from "../pages/UpdateGroup";
import OngoingEvent from "./OngoingEvent";
import ErrorPage from "../pages/ErrorPage";
import { Suspense } from "react";
import Spinner from "./Spinner";

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
                loader: () => fetch('http://localhost:3000/groups'),
                element: <PrivateRoute>
                    <MyGroup></MyGroup>
                </PrivateRoute>
            },
            {
                path: '/updateGroup/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/groups/${params.id}`),
                element: <PrivateRoute>
                    <UpdateGroup></UpdateGroup>
                </PrivateRoute>
            },
            {
                path: '/groups/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/groups/${params.id}`),
                element: <PrivateRoute>
                    <GroupDetails></GroupDetails>
                </PrivateRoute>,
            },
            {
                path: '/signIn',
                Component: SignIn
            },
            {
                path: '/signUp',
                Component: SignUp
            }

        ],

    },
    {
        path: '*',
        Component: ErrorPage
    }
]);
