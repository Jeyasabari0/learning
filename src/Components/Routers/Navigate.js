import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.module.css'

const navs = ({ isActive }) => {
    return {
        fontWeight:isActive?'bold':'',
        textDecoration:isActive?'none':''
    }
}

const Navigate = () => {
    return (
        <div className='routers'>
            <NavLink style={navs} to={'/'}>Home</NavLink>
            <NavLink style={navs} to={'about'}>About</NavLink>
        </div>
    )
}

export default Navigate
