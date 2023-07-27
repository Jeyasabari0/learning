import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

function Conditional() {

    const [name, setName] = useState(true)

    return (
        <div>
            <Typography gutterBottom>{name ? <div>hello</div> : <div>bye</div>}</Typography>
            <Button variant='contained' onClick={() => setName(value => !value)}>Render</Button>
        </div>
    )
}

export default Conditional
