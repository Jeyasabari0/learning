import React from 'react'
import ComponentA from './ComponentA'

 const name='sabari'
const age=24
export const UserContext = React.createContext()
export const admincontext = React.createContext()

function ContextFunction() {
    return (
        <div>
            <UserContext.Provider value={name} >
                <admincontext.Provider value={age}>
                    <ComponentA />
                </admincontext.Provider>
            </UserContext.Provider>

        </div>
    )
}

export default ContextFunction
