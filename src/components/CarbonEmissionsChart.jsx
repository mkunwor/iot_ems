import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FiSliders } from "react-icons/fi";

const data = [
  { hour: 0, kg: 2 },
  { hour: 1, kg: 0.2 },
  { hour: 2, kg: 0.2 },
  { hour: 3, kg: 0.3 },
  { hour: 4, kg: 1 },
  { hour: 5, kg: 1.5 },
  { hour: 6, kg: 0.2 },
  { hour: 7, kg: 2 },
  { hour: 8, kg: 5 },
  { hour: 9, kg: 4.5 },
  { hour: 10, kg: 4.5 },
  { hour: 11, kg: 4.5 },
];

const CarbonEmissionsChart = () => (
  <div className="bg-white shadow p-4 rounded-lg">
    {/* Header */}
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center space-x-2">
        <div className="w-1 h-5 bg-teal-600"></div>
        <h2 className="text-lg font-semibold text-gray-800">Carbon emissions today</h2>
      </div>
      <FiSliders className="text-gray-400 text-sm cursor-pointer" />
    </div>

    <div className="text-xs text-gray-500 font-medium mb-2">kg</div>

    {/* Chart */}
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={14}>
          <XAxis dataKey="hour" tick={{ fontSize: 10 }} />
          <YAxis domain={[0, 6]} tick={{ fontSize: 10 }} />
          <Tooltip />
          <Bar
            dataKey="kg"
            fill="#14b8a6"
            radius={[6, 6, 0, 0]} // rounded top bars
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default CarbonEmissionsChart;
