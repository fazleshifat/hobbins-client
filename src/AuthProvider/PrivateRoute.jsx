import React, { use } from 'react';
import { AuthContext } from './AuthContexts';
import { Navigate, useNavigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user } = use(AuthContext);

    // const navigate = useNavigate();

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/SignIn'></Navigate>
};

export default PrivateRoute;