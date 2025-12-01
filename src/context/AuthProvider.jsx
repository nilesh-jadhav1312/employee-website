import React, { createContext } from 'react'

export const AuthContext=createContext();   // creating global context to provide the  data to all components
import {useState}   from 'react'
import { useEffect } from 'react'
import { getLocalStorage } from '../utils/LocalStorage';


const AuthProvider = ({children}) => {  // this is the functin to create the context as Autiprovider means authentication provider
 // means to all childrens wrapped inside it  
  const [userData, setuserData] = useState(null)

  useEffect(() => {
    const {employees,admin}=getLocalStorage()
    setuserData({employees,admin})
  
  }, [])
  
  
  return (
    
    <div>
      <AuthContext.Provider value={userData} >    
               {children}
      </AuthContext.Provider>
    

      
    </div>
  )
}

export default AuthProvider