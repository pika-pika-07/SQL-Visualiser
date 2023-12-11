import React from "react";
import MainContent from "./MainContent";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div className="flex w-full h-[90vh]">
      <SideBar />
      <MainContent />
    </div>
  );
};

export default Dashboard;
