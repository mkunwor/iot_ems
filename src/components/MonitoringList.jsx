import React from "react";

function MonitoringList() {
  const meters = [
    {
      id: "24092404670002",
      address: "24092404670002",
      type: "ADW300",
      status: "Offline",
    },
    {
      id: "02122042700210",
      address: "1_10",
      type: "ADF400LSY",
      status: "Normal",
    },
    {
      id: "02122042700210",
      address: "1_9",
      type: "ADF400LSY",
      status: "Normal",
    },
  ];

  return (
    <div className="bg-white text-black shadow rounded p-4">
      <h2 className="text-xl font-bold mb-4">Monitoring List</h2>
      {meters.map((meter, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-2 border-b"
        >
          <div>
            <p>Gateway ID: {meter.id}</p>
            <p>Meter Address: {meter.address}</p>
            <p>Type: {meter.type}</p>
          </div>
          <span
            className={`px-3 py-1 rounded ${
              meter.status === "Normal" ? "bg-green-500" : "bg-gray-500"
            } text-orange-50`}
          >
            {meter.status}
          </span>
        </div>
      ))}
    </div>
  );
}

export default MonitoringList;
