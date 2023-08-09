import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

const Login = () => {

    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        auth.login(user)
        navigate('/')

    }

    return (
        <div>
            <TextField variant='standard' label='user' onChange={(e) => setUser(e.target.value)} />
            <Button variant='contained' onClick={handleLogin}>LOGIN</Button>
        </div>
    )
}

export default Login
