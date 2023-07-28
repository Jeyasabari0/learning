import React,{useContext} from 'react'
import { Button } from '@mui/material'
import { countcontext } from '../ReducerAndContext'


function Ccomponent() {
    const countcontext=useContext(countcontext)
    return (
        <div>
            Component c - {countcontext.countstate}
            <Button onClick={() => countcontext.countdispatch('increase')}>INCREAMENT</Button>
            <Button onClick={() => countcontext.countdispatch('decrease')}>DECREAMENT</Button>
            <Button onClick={() => countcontext.countdispatch('reset')}>RESET</Button>
        </div>
    )
}

export default Ccomponent
