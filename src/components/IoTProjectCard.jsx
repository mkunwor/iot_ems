import React from "react";

const IoTProjectPanel = () => {
  return (
    <div className="w-72 bg-white rounded shadow overflow-hidden flex flex-col">
      {/* Top Heading */}
      <div className="bg-cyan-50 px-4 py-2 flex justify-between items-center">
        <h2 className="font-semibold text-lg text-gray-700">IoT Project</h2>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
          Switch
        </button>
      </div>

      {/* Fold */}
      <div className="text-right text-xs text-gray-400 px-4 mt-2 cursor-pointer">
        &lt;Fold
      </div>

      {/* Image */}
      <div className="flex justify-center mt-2">
        <img
          src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?fit=crop&w=200&q=80"
          alt="Cityscape"
          className="rounded-full w-28 h-28 object-cover"
        />
      </div>

      {/* City Info */}
      <div className="text-center mt-3">
        <div className="font-bold text-lg text-gray-800">Cityscape</div>
        <div className="text-gray-600 text-sm mt-1">
          <span className="font-semibold">admin</span> (18761508305)
        </div>
        <div className="text-gray-600 text-sm mt-1">China, Jiangyin</div>
      </div>

      {/* Status Counts */}
      <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm text-gray-700 px-4">
        {/* Normal */}
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
            <span>normal</span>
          </div>
          <div className="font-bold text-cyan-600">215 PCS</div>
        </div>

        {/* Offline */}
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <span>offline</span>
          </div>
          <div className="font-bold text-gray-600">4 PCS</div>
        </div>

        {/* Fault */}
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <span>fault</span>
          </div>
          <div className="font-bold text-yellow-600">0 PCS</div>
        </div>

        {/* Alarm */}
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span>alarm</span>
          </div>
          <div className="font-bold text-red-600">0 PCS</div>
        </div>
      </div>

      {/* Electricity Card */}
      <div className="bg-gray-50 mx-4 mt-6 mb-4 rounded-lg p-4 shadow-sm flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-2">
          {/* Icon */}
          <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-gray-600 text-sm font-semibold">
            Electricity consumption today
          </span>
        </div>
        <div className="text-cyan-800 font-bold text-2xl">214.78 kWh</div>
      </div>
    </div>
  );
};

export default IoTProjectPanel;
