import React, { use } from 'react';
import { AuthContext } from './AuthContexts';
import { Navigate, useLocation, useNavigate, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);

    const location = useLocation();

    // secondary loader 

    // const Navigation = useNavigation()

    // if (Navigation.state === "loading") {
    //     return <Spinner />;
    // }

    if (loading) {
        return (
            <Spinner></Spinner>
        );
    }


    if (user) {
        return children;
    }

    return <Navigate to='/signIn' state={location.pathname} replace></Navigate>
};

export default PrivateRoute;