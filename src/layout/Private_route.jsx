import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import Loading from '../components/Loading/Loading';

const Private_route = ({ children }) => {
    const { profile, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading />
    }
    if (!profile) {
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }
    return children;
};

export default Private_route;