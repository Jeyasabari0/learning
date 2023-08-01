import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

    // const params = useParams() 
    // const userId = params.userId (or)
    const { userId } = useParams()

    return (
        <div>
            <h2>User Details {userId}</h2>
        </div>
    )
}

export default UserDetails
