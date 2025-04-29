import React, { useState } from "react";

const DeviceListWithPagination = () => {
  const allDevices = Array.from({ length: 50 }).map((_, i) => ({
    name: `Device_${i + 1}`,
    gatewayId: `GWID_${1000 + i}`,
    meterAddress: `MID_${1000 + i}`,
    meterType: `Type_${i % 3 === 0 ? "ADW300" : "ADF400"}`,
    status: "Normal",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const devicesPerPage = 8; // 4 rows of 2 columns

  // Pagination calculation
  const indexOfLastDevice = currentPage * devicesPerPage;
  const indexOfFirstDevice = indexOfLastDevice - devicesPerPage;
  const currentDevices = allDevices.slice(indexOfFirstDevice, indexOfLastDevice);
  const totalPages = Math.ceil(allDevices.length / devicesPerPage);

  return (
    <div className="flex-1 flex flex-col">

      {/* Top Filters */}
      <div className="flex justify-between mb-4">
        <div className="flex space-x-2">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold px-4 py-2 rounded">normal</button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-semibold px-4 py-2 rounded">offline</button>
          <button className="bg-yellow-300 hover:bg-yellow-400 text-yellow-800 text-sm font-semibold px-4 py-2 rounded">fault</button>
          <button className="bg-red-400 hover:bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded">alarm</button>
        </div>

        <div className="flex space-x-2 items-center">
          <select className="border rounded px-2 py-1 text-sm">
            <option>Node type</option>
          </select>
          <span className="text-gray-500">-</span>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Node</option>
          </select>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Energy</option>
          </select>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Gateway ID</option>
          </select>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1 rounded text-sm flex items-center">
            <span>Array mode</span>
          </button>
        </div>
      </div>

      {/* Device Cards */}
      <div className="grid grid-cols-2 gap-4">
        {currentDevices.map((device, idx) => (
          <div key={idx} className="bg-cyan-50 rounded shadow-sm p-4 flex justify-between">
            <div>
              <div className="font-bold text-gray-700 text-sm">{device.name}</div>
              <div className="text-xs text-gray-600 mt-1">Gateway id: {device.gatewayId}</div>
              <div className="text-xs text-gray-600 mt-1">Meter address: {device.meterAddress}</div>
              <div className="text-xs text-gray-600 mt-1">Meter type: {device.meterType}</div>
            </div>
            <div className="flex flex-col items-end justify-between">
              <span className="bg-cyan-200 text-cyan-800 text-xs font-bold px-2 py-1 rounded">
                {device.status}
              </span>
              <button className="mt-2 border border-gray-400 text-gray-600 hover:bg-gray-100 text-xs font-semibold px-3 py-1 rounded">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-600">

        {/* Left */}
        <div>Total {allDevices.length}</div>

        {/* Right */}
        <div className="flex items-center space-x-2">
          {/* Previous */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="px-2"
          >
            {"<"}
          </button>

          {/* Pages */}
          {Array.from({ length: totalPages }).slice(0, 5).map((_, idx) => (
            <button
              key={idx}
              className={`px-2 py-1 rounded ${
                currentPage === idx + 1 ? "bg-cyan-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}

          <span className="px-2">...</span>
          <button
            className="px-2 py-1 hover:bg-gray-200 rounded"
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </button>

          {/* Next */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            className="px-2"
          >
            {">"}
          </button>

          {/* Page Size */}
          <select className="border rounded p-1 text-sm">
            <option>24/page</option>
          </select>

          {/* Go to */}
          <div className="flex items-center space-x-1">
            <span>Go to</span>
            <input
              type="number"
              min="1"
              className="w-12 border rounded text-center text-sm p-1"
              placeholder="1"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const val = parseInt(e.target.value);
                  if (val >= 1 && val <= totalPages) setCurrentPage(val);
                }
              }}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default DeviceListWithPagination;
