import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './auth';


const RequireAuth = ( {children}) => {

    const auth = useAuth()
    console.log('hi', auth.user,children);
    if (!auth.user) {

        return <Navigate to={'/login'} />
    }

    return children
}

export default RequireAuth