import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { FiZap, FiActivity, FiTrendingDown } from "react-icons/fi";

const stats = [
  {
    icon: <FiZap className="text-teal-600 text-lg" />,
    label: "Electricity (kWh)",
    value: "45.98",
    yoy: "-85.6%",
    mom: "-13.1%",
  },
  {
    icon: <FiActivity className="text-teal-600 text-lg" />,
    label: "Comprehensive",
    value: "5.65",
    yoy: "-85.6%",
    mom: "-13.1%",
  },
  {
    icon: <FiTrendingDown className="text-teal-600 text-lg" />,
    label: "Carbon emissions",
    value: "28.05",
    yoy: "-85.6%",
    mom: "-13.1%",
  },
];

const EnergyStats = () => (
  <div className="bg-white shadow p-4 rounded-lg">
    {/* Title */}
    <div className="flex items-center space-x-2 mb-4">
      <div className="w-1 h-5 bg-teal-600"></div>
      <h2 className="text-lg font-semibold text-gray-800">Energy statistics today</h2>
    </div>

    {/* Stat Rows */}
    <div className="space-y-4 text-sm">
      {stats.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          {/* Icon + Label */}
          <div className="flex items-center space-x-2 w-48">
            <div className="p-1 bg-teal-50 rounded-full">{item.icon}</div>
            <span className="text-gray-700 truncate">{item.label}</span>
          </div>

          {/* Value */}
          <div className="text-lg font-semibold text-gray-900 w-16 text-center">{item.value}</div>

          {/* YoY */}
          <div className="text-green-700 font-semibold flex items-center space-x-1 w-20 justify-end">
            <span>{item.yoy}</span>
            <FaArrowDown className="text-xs" />
          </div>

          {/* MoM */}
          <div className="text-green-700 font-semibold flex items-center space-x-1 w-20 justify-end">
            <span>{item.mom}</span>
            <FaArrowDown className="text-xs" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EnergyStats;
