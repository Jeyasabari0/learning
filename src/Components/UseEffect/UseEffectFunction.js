import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

function UseEffectFunction() {

    const [count, setCount] = useState(0)
    const [name, setname] = useState('')

    useEffect(() => {
        console.log('updating');
        document.title = `u clicked ${count} times`
    },[count]
    )

    return (
        <div>
            <TextField variant='standard' label='Name' value={name} onChange={(e) => { setname(e.target.value) }} />
            <Button onClick={() => { setCount(count + 1) }}>clicked {count} times</Button>
        </div>
    )
}

export default UseEffectFunction
