import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import Loader from '../Components/Others/Loader';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading) return <Loader/>

    if(user && user.email){
        return children;
    } else {
        alert('You are not logged in');
        <Navigate to="/auth/login" state={location.pathname} replace />
    }
};

export default PrivateRoute;