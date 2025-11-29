import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import Tasklistt from "../Tasklist/Tasklistt";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-gray-400 h-screen">
      <Header />
      <TaskListNumbers />
      <Tasklistt />
    </div>
  );
};

export default EmployeeDashboard;
