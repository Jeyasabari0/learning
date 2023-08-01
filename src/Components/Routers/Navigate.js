import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.module.css'
import { Button } from '@mui/material'
import { useAuth } from './Auth'

const Navigate = () => {

    const navs = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : '',
            textDecoration: isActive ? 'none' : ''
        }
    }

    const auth = useAuth()

    return (
        <div className='routers'>
            <Button variant='contained'><NavLink style={navs} to={'/'}>Home</NavLink></Button>
            <Button variant='contained'><NavLink style={navs} to={'/about'}>About</NavLink></Button>
            <Button variant='contained'><NavLink style={navs} to={'/products'}>Products</NavLink></Button>
            <Button variant='contained'><NavLink style={navs} to={'/profile'}>Profile</NavLink></Button>
            {!auth.user && (<Button variant='contained'><NavLink style={navs} to={'/login'}>Login</NavLink></Button>)}
        </div>
    )
}

export default Navigate
