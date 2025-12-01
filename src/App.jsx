import React from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Admindashboard from "./components/Dashboard/Admindashboard";
// import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { useState,useEffect } from "react";
import { useContext } from "react"; // module to use the context created as  a global in context provider directory
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user,setUser] = useState(null);
  
  const AuthData=useContext(AuthContext) // stroing data
   console.log(AuthData);
   //-------------------------------------------------------
   useEffect(() => {
     if(AuthData){
      const loggedinuser=localStorage.getItem('loggedinuser')
      if(loggedinuser)
      {
        setUser(loggedinuser.role)
      }
     }
   
      
   }, [AuthData])
   


//---------------------------------------------------------------
  const handleLogin = (email, password) => 
    {
    if (AuthData && AuthData.admin.find((e)=>email==e.email && password==e.password))
       {
       setUser('admin')

       localStorage.setItem('loggedinuser',JSON.stringify({role:'admin'}))
        }
     else if (AuthData && AuthData.employees.find((e)=>email==e.email && password==e.password)) 
      {
      setUser('employee')
      localStorage.setItem('loggedinuser',JSON.stringify({role:'employee'}))
    } 
    else 
      {
      alert("invalid details");
    }
  };

//---------------------------------------------------------------------

  
   return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ""}
       {user=='admin'&& <Admindashboard/>}
       {user=='employee'&& <EmployeeDashboard/>}
      {/* <Admindashboard/> */}
    </>
  );
};

export default App;
