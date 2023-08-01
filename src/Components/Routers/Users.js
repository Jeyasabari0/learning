import { Button } from '@mui/material'
import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchparams, setSearchParams] = useSearchParams('')
    const activeusers = searchparams.get('filter') === 'active'
    return (
        <div>
            <div>
                <h3>User 1</h3>
                <h3>User 2</h3>
            </div>
            <div>
                <Button variant='contained' onClick={() => setSearchParams({ filter: 'active' })}>Active Users</Button>
                <Button variant='contained' onClick={() => setSearchParams({})}>Reset Users</Button>

            </div>
            <div> {activeusers ? <h2>showing Active Users</h2> : <h2>showing All Users</h2>}</div>
            <Outlet />
        </div>
    )
}

export default Users
