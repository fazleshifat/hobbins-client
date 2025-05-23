import React, { use } from 'react';
import { AuthContext } from './AuthContexts';
import { Navigate, useLocation, useNavigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    // console.log(user);

    const location = useLocation();
    // console.log(location);

    if (loading) {
        return (
            <div className="h-screen w-full flex justify-center">
                <span className="loading loading-infinity text-gray-500 w-14"></span>
            </div>
        );
    }


    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/signIn'></Navigate>
};

export default PrivateRoute;