import { createUserWithEmailAndPassword } from "firebase/auth"
import { createContext, useState } from "react"
import { auth } from "../firebase.config"



export const Authcontext=createContext(null)

export const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo={
        user,
        loading,
        createUser
    }
  return (
  <Authcontext.Provider value={userInfo}>
{children}
  </Authcontext.Provider>
  )
}
