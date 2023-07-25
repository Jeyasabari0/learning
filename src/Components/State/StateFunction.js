import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

function StateFunction() {

    const [name, setName] = useState('Sabari')

    const handleChange = () => { setName('Visvaa') }

    return (
        <div>
            <Typography variant='h6' gutterBottom>Changing name by State in Function component by {name}</Typography>
            <Button variant='contained' onClick={handleChange}>Change Name</Button>
        </div>
    )
}

export default StateFunction
