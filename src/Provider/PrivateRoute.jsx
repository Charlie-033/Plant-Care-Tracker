import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import Loader from '../Components/Others/Loader';
import { Navigate, useLocation } from 'react-router';
import { toast } from 'react-toastify';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading) return <Loader/>

    if(user && user.email){
        return children;
    } else {
        toast.info('You are not logged in!');
        return <Navigate to="/auth/login" state={location.pathname} replace />
    }
};

export default PrivateRoute;