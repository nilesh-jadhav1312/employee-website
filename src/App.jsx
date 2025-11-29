import React from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Admindashboard from "./components/Dashboard/Admindashboard";
// import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { useState } from "react";

const App = () => {
  const [user,setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == 123) {
       setUser('admin')
    } else if (email == "employee1@example.com" && password == 123) {
      setUser('employee')
    } else {
      alert("invalis details");
    }
  };

 

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
