import React from "react";
import IoTProjectCard from "./IoTProjectCard"; 
import DeviceListWithPagination from "./DeviceListWithPagination"; 

const RealTimeMonitoring = () => {
  return (
    <div className="flex h-full p-4 bg-gray-50 space-x-4">
      
      {/* Left: IoT Project Card */}
      <div className="w-72">
        <IoTProjectCard />
      </div>

      {/* Right: Device List with Filters and Pagination */}
      <div className="flex-1 overflow-auto">
        <DeviceListWithPagination />
      </div>

    </div>
  );
};

export default RealTimeMonitoring;
