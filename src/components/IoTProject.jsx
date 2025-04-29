import React from "react";

function IoTProject() {
  return (
    <div className="bg-white text-black shadow rounded p-4 mb-4">
      <h2 className="text-xl font-bold">IoT Project</h2>
      <p>Cityscape</p>
      <p>Admin: (18761508305)</p>
      <p>Location: China, Jiangyin</p>
      <div className="mt-4">
        <span className="bg-green-500 text-white px-2 py-1 rounded">
          Normal: 217
        </span>
        <span className="bg-gray-500 text-white px-2 py-1 rounded ml-2">
          Offline: 1
        </span>
      </div>
    </div>
  );
}

export default IoTProject;
