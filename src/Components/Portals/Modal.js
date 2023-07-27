import React from 'react'
import { Button, Typography } from '@mui/material'

function Modals({ onClose }) {

    return (
        <div>
            <div><Typography variant='h4'>I'm a modal dialog</Typography></div>
            <Button onClick={onClose}>Close</Button>
        </div>
    )
}

export default Modals
