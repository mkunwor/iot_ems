import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { FaLink } from "react-icons/fa";

const data = [
  { name: "Alarm", value: 0, color: "#00B0F0", percent: "0.0%" },
  { name: "Offline", value: 4, color: "#A6A6A6", percent: "1.8%" },
  { name: "Normal", value: 215, color: "#00B098", percent: "98.2%" },
];

const DeviceStatus = () => (
  <div className="bg-white shadow p-4 rounded-lg">
    {/* Title Row */}
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <div className="w-1 h-5 bg-teal-600"></div>
        <h2 className="text-lg font-semibold text-gray-800">Device status</h2>
      </div>
      <button className="flex items-center text-gray-300 text-[10px] hover:text-gray-400">
  <FaLink className="mr-1 text-[10px]" />
  More
</button>



    </div>

    {/* Chart + Legend */}
    <div className="flex items-center justify-between">
      {/* Donut Chart */}
      <PieChart width={120} height={120}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={45}
          innerRadius={25}
          paddingAngle={2}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>

      {/* Labels */}
      <div className="space-y-3 text-sm text-gray-800">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between w-40">
            <div className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: item.color }}
              ></div>
              <span>{item.name}(PC...)</span>
            </div>
            <div className="text-right">
              <div className="font-semibold">{item.value}</div>
              <div className="text-teal-700 text-sm">{item.percent}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default DeviceStatus;
