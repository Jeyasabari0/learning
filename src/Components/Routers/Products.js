import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <div>
            <div><TextField variant='standard' type='search' label='search' /></div>
            <div>
                <Button variant='contained'><Link to={'featured'}>Featured</Link></Button>
                <Button variant='contained'><Link to={'new'}>New</Link></Button>
            </div>
            <Outlet />
        </div>
    )
}

export default Products
