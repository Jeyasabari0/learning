import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'


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
            <TextField variant='contained' label='user' value={''} onChange={e => setUser(e.target.value)} />
            <Button variant='contained' onClick={handleLogin}>LOGIN</Button>
        </div>
    )
}

export default Login
