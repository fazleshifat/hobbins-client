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
import UpdateGroup from "../pages/UpdateGroup";
import ErrorPage from "../pages/ErrorPage";
import UpcomingEvents from "./UpcomingEvents";
import Review from "./Review";
import AboutUs from "./AboutUs";
import EventDetails from "./EventDetails";
import ModalUpdateGroupInfo from "../pages/ModalUpdateGroupInfo";
import ModalForUpdate from "./ModalForUpdate";
import Dashboard from "../Dashboard/Dashboard";
import DashboardOverview from "../Dashboard/DashboardOverview";
import Profile from "../Dashboard/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                loader: async () => await fetch('http://localhost:3000/groups'),
                Component: Home
            },
            {
                path: '/all-groups',
                loader: async () => await fetch('http://localhost:3000/groups'),
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
                loader: async () => await fetch('http://localhost:3000/groups'),
                element: <PrivateRoute>
                    <MyGroup></MyGroup>
                </PrivateRoute>
            },
            // {
            //     path: '/updateGroup/:id',
            //     loader: async ({ params }) => await fetch(`http://localhost:3000/groups/${params.id}`),
            //     element: <PrivateRoute>
            //         <UpdateGroup></UpdateGroup>
            //     </PrivateRoute>
            // },
            // {
            //     path: '/updateGroup/:id',
            //     loader: async ({ params }) => await fetch(`http://localhost:3000/groups/${params.id}`),
            //     element: <PrivateRoute>
            //         <ModalForUpdate></ModalForUpdate>
            //     </PrivateRoute>
            // },
            // {
            //     path: '/updateGroup/:id',
            //     loader: async ({ params }) => await fetch(`http://localhost:3000/groups/${params.id}`),
            //     element: <PrivateRoute>
            //         <ModalUpdateGroupInfo></ModalUpdateGroupInfo>
            //     </PrivateRoute>
            // },
            {
                path: '/groups/:id',
                loader: async ({ params }) => await fetch(`http://localhost:3000/groups/${params.id}`),
                element: <PrivateRoute>
                    <GroupDetails></GroupDetails>
                </PrivateRoute>,
                errorElement: <ErrorPage />
            },
            {
                path: '/signIn',
                Component: SignIn
            },
            {
                path: '/signUp',
                Component: SignUp
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
                loader: async () => await fetch('http://localhost:3000/groups'),
                element: <AllGroups />
            },
            {
                path: 'create-group',
                element: <CreateGroup />
            },
            {
                path: 'my-groups',
                loader: async () => await fetch('http://localhost:3000/groups'),
                element: <MyGroup />
            },
            {
                path: 'profile/:email',
                loader: async ({ params }) => await fetch(`http://localhost:3000/users/${params.email}`),
                element: <Profile />
            }
        ]
    }

    , {
        path: '/eventDetails',
        Component: EventDetails
    },
    {
        path: '*',
        Component: ErrorPage
    }
]);
