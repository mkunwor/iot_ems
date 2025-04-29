import React, { useState } from "react";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

const electricityData = [
  { time: 0, value: 2 },
  { time: 1, value: 1 },
  { time: 2, value: 0 },
  { time: 3, value: 1 },
  { time: 4, value: 2 },
  { time: 5, value: 1 },
  { time: 6, value: 0 },
  { time: 7, value: 2 },
  { time: 8, value: 8 },
  { time: 9, value: 7 },
  { time: 10, value: 7 },
  { time: 11, value: 7 },
];

const tabs = ["Electricity", "Water", "Comprehensive"];

const EnergyTrendChart = () => {
  const [activeTab, setActiveTab] = useState("Electricity");

  return (
    <div className="bg-white shadow p-4 rounded-lg">
      {/* Title */}
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-1 h-5 bg-teal-600"></div>
        <h2 className="text-lg font-semibold text-gray-800">
          Today's energy consumption trend
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 border-b text-sm font-medium mb-2 pl-4">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1 ${
              activeTab === tab
                ? "text-teal-700 border-b-2 border-teal-700"
                : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={electricityData}>
            <XAxis dataKey="time" tick={{ fontSize: 10 }} />
            <YAxis domain={[0, 10]} tick={{ fontSize: 10 }} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#14b8a6"
              fill="#99f6e4"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EnergyTrendChart;
