import React, { useState } from 'react'
import Mouse from './Mouse'
import { Button } from '@mui/material'

function Display() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <Button onClick={()=>setDisplay(!display)}>UNMOUNT</Button>
            {display && <Mouse />}
        </div>
    )
}

export default Display
