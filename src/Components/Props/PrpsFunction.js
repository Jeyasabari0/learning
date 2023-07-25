import { Typography } from '@mui/material'
import React from 'react'


function PrpsFunction(props) {
    return (
        <div>
            <Typography variant='h6' gutterBottom>Changing name by State in Function component by {props.name}</Typography>
        </div>
    )
}

export default PrpsFunction
