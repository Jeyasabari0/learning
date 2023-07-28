import React, { useReducer } from 'react'
import Acomponent from './Acomponent'
import Bcomponent from './Bcomponent'
import Dcomponent from './Dcomponent'

export const countcontext = React.createContext()

const initialstate = 0

const reducer = (state, action) => {
    switch (action) {
        case 'increase': return state + 1
        case 'decrease': return state - 1
        case 'reset': return initialstate
        default: return state
    }
}

function ReducerAndContext() {

    const [count, dispatch] = useReducer(reducer, initialstate)

    return (
        <countcontext.Provider value={{ countstate: count, countdispatch: dispatch }}>
            <div>
                <Acomponent />
                <Bcomponent />
                <Dcomponent />
            </div>
        </countcontext.Provider>
    )

}
export default ReducerAndContext
