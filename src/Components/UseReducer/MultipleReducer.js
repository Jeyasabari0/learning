import { Button } from '@mui/material'
import React, { useReducer } from 'react'

function MultipleReducer() {

    const initialstate = 0
    const reducer = (state, action) => {
        switch (action) {
            case 'increase': return state + 1
            case 'decrease': return state - 1
            case 'reset': return initialstate
            default: return state
        }
    }

    const [count, dispatch] = useReducer(reducer, initialstate)
    const [count2, dispatch2] = useReducer(reducer, initialstate)



    return (
        <div>
            <div>count - {count}</div>
            <Button onClick={() => dispatch('increase')}>INCREAMENT</Button>
            <Button onClick={() => dispatch('decrease')}>DECREAMENT</Button>
            <Button onClick={() => dispatch('reset')}>RESET</Button>
            <div>count2 - {count2}</div>
            <Button onClick={() => dispatch2('increase')}>INCREAMENT</Button>
            <Button onClick={() => dispatch2('decrease')}>DECREAMENT</Button>
            <Button onClick={() => dispatch2('reset')}>RESET</Button>
        </div>
    )
}
export default MultipleReducer
