import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const Admindashboard = () => {
  return (
    <div className="h-screen w-full p-10 bg-gray-400 ">
      <Header />
      <CreateTask/>
      <AllTask/> 
    </div>
  );
};

export default Admindashboard;
