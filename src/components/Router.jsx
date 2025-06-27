import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "../pages/Home";
import CreateGroup from "../pages/CreateGroup";
import AllGroups from "../pages/AllGroups";
import GroupDetails from "../pages/GroupDetails";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import MyGroup from "../pages/MyGroup";
import ErrorPage from "../pages/ErrorPage";
import EventDetails from "./EventDetails";
import Dashboard from "../Dashboard/Dashboard";
import DashboardOverview from "../Dashboard/DashboardOverview";
import AboutUs from "../pages/AboutUs";
import ContactSection from "../pages/ContactSection";
import Support from "../pages/Support";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                loader: async () => await fetch('https://hobbins-server.vercel.app/groups'),
                Component: Home
            },
            {
                path: '/all-groups',
                loader: async () => await fetch('https://hobbins-server.vercel.app/groups'),
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
                loader: async () => await fetch('https://hobbins-server.vercel.app/groups'),
                element: <PrivateRoute>
                    <MyGroup></MyGroup>
                </PrivateRoute>
            },
            {
                path: '/aboutUs',
                Component: AboutUs
            },
            {
                path: '/contactSection',
                Component: ContactSection
            },
            {
                path: '/support',
                Component: Support
            },
            {
                path: '/groups/:id',
                loader: async ({ params }) => await fetch(`https://hobbins-server.vercel.app/groups/${params.id}`),
                element: <PrivateRoute>
                    <GroupDetails></GroupDetails>
                </PrivateRoute>,
                errorElement: <ErrorPage />
            },




        ],

    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
            {
                index: true,
                element: <DashboardOverview />
            }
            ,
            {
                path: 'all-groups',
                loader: async () => await fetch('https://hobbins-server.vercel.app/groups'),
                element: <AllGroups />
            },
            {
                path: 'create-group',
                element: <CreateGroup />
            },
            {
                path: 'my-groups',
                loader: async () => await fetch('https://hobbins-server.vercel.app/groups'),
                element: <MyGroup />
            }
        ]
    },
    {
        path: '/signIn',
        Component: SignIn
    },
    {
        path: '/signUp',
        Component: SignUp
    },

    , {
        path: '/eventDetails',
        Component: EventDetails
    },
    {
        path: '*',
        Component: ErrorPage
    }
]);
