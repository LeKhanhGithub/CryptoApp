import React, { useContext, useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"
import Loader from "../Loader"

import { auth } from "./firebase"

const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const navigate = useNavigate()
  

    useEffect(() => {
        auth.onAuthStateChanged(user => {
        if(user){
          navigate('/forum/chats')
        }
        
        setUser(user)
        setLoading(false)
          
        })
      }, [user, navigate])
    
      const value = { user }
      
      return (
        <AuthContext.Provider value={value}>
          {loading ? <Loader/> : children}
        </AuthContext.Provider>
      )
}


