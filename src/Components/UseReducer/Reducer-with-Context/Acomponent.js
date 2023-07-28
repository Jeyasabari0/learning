import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { countcontext } from '../ReducerAndContext'

function Acomponent() {
    const countcontex = useContext(countcontext)
    return (
        <div>
            Component A - {countcontex.countstate}
            <Button onClick={() => countcontext.countdispatch('increase')}>INCREAMENT</Button>
            <Button onClick={() => countcontext.countdispatch('decrease')}>DECREAMENT</Button>
            <Button onClick={() => countcontext.countdispatch('reset')}>RESET</Button>
        </div>
    )
}

export default Acomponent
