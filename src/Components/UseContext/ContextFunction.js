import React from 'react'
import ComponentA from './ComponentA'

export const UserContext = React.createContext()
export const admincontext = React.createContext()

function ContextFunction() {
    return (
        <div>
            <UserContext.Provider value={'FaFa'} >
                <admincontext.Provider value={'Kamal'}>
                    <ComponentA />
                </admincontext.Provider>
            </UserContext.Provider>

        </div>
    )
}

export default ContextFunction
