import React, { useReducer } from 'react'
import { Button } from '@mui/material'

function ReducerObjCounter() {

    const initialstate = {
        counter1: 0,
        counter2: 10
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increase': return { ...state, counter1: state.counter1 + action.value }
            case 'decrease': return { ...state, counter1: state.counter1 - action.value }
            case 'increase2': return { ...state, counter2: state.counter2 + action.value }
            case 'decrease2': return { ...state, counter2: state.counter2 - action.value }
            case 'reset': return initialstate
            default: return state
        }
    }

    const [count, dispatch] = useReducer(reducer, initialstate)



    return (
        <div>
            <div>counter1 - {count.counter1}</div>
            <Button onClick={() => dispatch({ type: 'increase', value: 1 })}>INCREAMENT</Button>
            <Button onClick={() => dispatch({ type: 'decrease', value: 1 })}>DECREAMENT</Button>
            <Button onClick={() => dispatch({ type: 'increase', value: 5 })}>INCREAMENT 5</Button>
            <Button onClick={() => dispatch({ type: 'decrease', value: 5 })}>DECREAMENT 5</Button>
            <Button onClick={() => dispatch({ type: 'reset' })}>RESET</Button>
            <div>counter2 - {count.counter2}</div>
            <Button onClick={() => dispatch({ type: 'increase2', value: 3 })}>INCREAMENT</Button>
            <Button onClick={() => dispatch({ type: 'decrease2', value: 3 })}>DECREAMENT</Button>
        </div>
    )
}

export default ReducerObjCounter
