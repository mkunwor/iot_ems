import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import RealTimeMonitoring from "./components/RealTimeMonitoring";
import MainDashboard from "./components/MainDashboard"; // This will hold all widgets

const App = () => {
  const [activePage, setActivePage] = useState("Main Dashboard");

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar setActivePage={setActivePage} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-1 p-6 bg-gray-50 overflow-auto">
          {activePage === "Main Dashboard" && <MainDashboard />}
          {activePage === "Real-time Monitoring" && <RealTimeMonitoring />}
          {/* Future other pages can go here like: */}
          {activePage === "Dashboard" && (
            <div className="text-2xl font-semibold text-gray-600 flex items-center justify-center h-full">
              Dashboard Content Coming...
            </div>
          )}
          {activePage === "Power Monitoring" && (
            <div className="text-2xl font-semibold text-gray-600 flex items-center justify-center h-full">
              Power Monitoring Overview
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
