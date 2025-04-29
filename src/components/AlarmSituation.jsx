import React from "react";
import { FaArrowDown } from "react-icons/fa";

const AlarmSituation = () => {
  return (
    <div className="bg-white shadow p-4 rounded-lg space-y-4">
      {/* Title */}
      <div className="flex items-center space-x-2">
        <div className="w-1 h-5 bg-teal-600"></div>
        <h2 className="text-lg font-semibold text-gray-700">
          Alarm situation for this month
        </h2>
      </div>

      {/* Total Alarms */}
      <div className="flex items-center space-x-4">
        {/* Icon */}
        <img
          src="https://img.icons8.com/ios-filled/50/alarm.png"
          alt="alarm icon"
          className="w-10 h-10 bg-teal-50 p-2 rounded-lg"
        />

        {/* Text + Numbers */}
        <div className="flex justify-between flex-1">
          <div>
            <p className="text-sm text-gray-500 font-medium">Total number of alarms</p>
            <h3 className="text-xl font-semibold text-gray-800">56</h3>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 font-medium">MoM</p>
            <h3 className="text-xl text-green-600 flex items-center justify-end space-x-1">
              <span>-46.2%</span>
              <FaArrowDown />
            </h3>
          </div>
        </div>
      </div>

      {/* Processed Alarms */}
      <div className="flex items-center space-x-4">
        {/* Icon */}
        <img
          src="https://img.icons8.com/ios-filled/50/alarm.png"
          alt="alarm icon"
          className="w-10 h-10 bg-teal-50 p-2 rounded-lg"
        />

        {/* Text + Numbers */}
        <div className="flex justify-between flex-1">
          <div>
            <p className="text-sm text-gray-500 font-medium">Processed in this month</p>
            <h3 className="text-xl font-semibold text-gray-800">40</h3>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 font-medium">MoM</p>
            <h3 className="text-xl text-green-600 flex items-center justify-end space-x-1">
              <span>-61.5%</span>
              <FaArrowDown />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlarmSituation;
