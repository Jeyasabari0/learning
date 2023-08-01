import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export const Auth = ({ Children }) => {

    const [user, setUser] = useState(null)
    const login = (user) => { setUser(user) }
    const logout = () => { setUser(null) }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {Children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)





