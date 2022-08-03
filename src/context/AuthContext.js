import React, { useState, createContext, useContext } from 'react'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)
export const AuthProvider = ({ children }) =>
{
  const [username, setUsername] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const signin = (username) => {
    if (!username){
        return;
}
    setUsername(username)
    setIsAuthenticated(true)
  }

  return (
    <AuthContext.Provider value={{ username, isAuthenticated, signin}}>
      {children}
    </AuthContext.Provider>
  )
}
