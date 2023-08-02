import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

const Profile = () => {

    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
console.log('k');
    return (
        <div>
            <div><h3>Welcome {auth.user}</h3></div>
            <Button onClick={handleLogout}>LOGOUT</Button>
        </div>
    )
}

export default Profile
