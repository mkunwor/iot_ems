import React from "react";
import { FaLink } from "react-icons/fa";

const data = [
  {
    project: "IoT Project",
    circuit: "prepared1-2",
    description: "Overvoltage alarm",
    level: "Minor",
    event: "Overvoltage",
    time: "2025-04-23 09:23",
  },
  {
    project: "IoT Project",
    circuit: "prepared1-2",
    description: "Overvoltage alarm",
    level: "Minor",
    event: "Overvoltage",
    time: "2025-04-23 08:00",
  },
  {
    project: "IoT Project",
    circuit: "prepared1-2",
    description: "Overvoltage alarm",
    level: "Minor",
    event: "Overvoltage",
    time: "2025-04-23 03:00",
  },
];

const AlarmDetails = () => (
  <div className="bg-white shadow p-4 rounded-lg">
    {/* Title and More */}
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <div className="w-1 h-5 bg-teal-600"></div>
        <h2 className="text-lg font-semibold text-gray-800">Alarm details</h2>
      </div>
      <button className="flex items-center text-gray-300 text-[10px] hover:text-gray-400">
        <FaLink className="mr-1 text-[10px]" />
        More
      </button>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left text-gray-800 border-separate border-spacing-y-1">
        <thead>
          <tr className="bg-teal-600 text-white">
            <th className="px-3 py-2 rounded-l-md">Project name</th>
            <th className="px-3 py-2">Circuit name</th>
            <th className="px-3 py-2">Detailed description</th>
            <th className="px-3 py-2">Alarm level</th>
            <th className="px-3 py-2">Event</th>
            <th className="px-3 py-2 rounded-r-md">Abnormal time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-3 py-2">{row.project}</td>
              <td className="px-3 py-2">{row.circuit}</td>
              <td className="px-3 py-2 truncate">{row.description}</td>
              <td className="px-3 py-2">{row.level}</td>
              <td className="px-3 py-2 truncate">{row.event}</td>
              <td className="px-3 py-2">{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AlarmDetails;
