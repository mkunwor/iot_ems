import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const data = [
  { date: "04.15", Processed: 2.9, NotProcessed: 2.9, Undistributed: 0 },
  { date: "04.17", Processed: 2.9, NotProcessed: 2.5, Undistributed: 0 },
  { date: "04.19", Processed: 2.0, NotProcessed: 2.0, Undistributed: 0 },
  { date: "04.21", Processed: 2.0, NotProcessed: 2.9, Undistributed: 0 },
  { date: "04.24", Processed: 2.0, NotProcessed: 2.2, Undistributed: 1 },
];

const AlarmDistribution = () => (
  <div className="bg-white shadow p-4 rounded-lg">
    {/* Title */}
    <div className="flex items-center space-x-2 mb-4">
      <div className="w-1 h-5 bg-teal-600"></div>
      <h2 className="text-lg font-semibold text-gray-800">
        Distribution of alarm situations in the past days
      </h2>
    </div>

    {/* Chart */}
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={2}>
          <XAxis dataKey="date" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} domain={[0, 3]} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="Processed" fill="#0284c7" />
          <Bar dataKey="NotProcessed" fill="#22d3ee" />
          <Bar dataKey="Undistributed" fill="#bae6fd" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default AlarmDistribution;
