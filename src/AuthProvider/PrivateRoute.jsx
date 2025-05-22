import React, { use } from 'react';
import { AuthContext } from './AuthContexts';
import { Navigate, useLocation, useNavigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading, setLoading } = use(AuthContext);

    // const navigate = useNavigate();

    const location = useLocation();
    // console.log(location)

    if (loading) {
        return (
            <div className="h-screen bg-base-100  flex justify-center items-center text-xl font-semibold">
                <span className="loading loading-circle text-black w-12"></span>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/SignIn" state={location.pathname} />;
    }

    return children;
};

export default PrivateRoute;