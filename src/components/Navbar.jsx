import React from "react";
import {
  FaSearch, FaVolumeMute, FaThLarge, FaImage,
  FaExpand, FaLanguage, FaTshirt
} from "react-icons/fa";

const Navbar = () => {
  return (
<header className="w-full h-16 bg-white shadow flex items-center justify-between px-4 border-b">
{/* Left section: title and tabs */}
      <div className="flex items-center space-x-6">
        {/* Logo toggle placeholder */}
        <div className="text-gray-600 text-2xl font-bold">☰</div>

        {/* Title */}
        <div className="text-xl font-semibold text-black">IOT EMS Platform</div>

        {/* Tabs / Breadcrumbs */}
        
      </div>

      {/* Right section: tools and alerts */}
      <div className="flex items-center space-x-4 text-gray-700">
        {/* Search Icon */}
        <FaSearch className="cursor-pointer" />

        {/* Alert Badges */}
        <div className="flex items-center space-x-1">
          <div className="relative bg-green-500 text-white px-2 py-0.5 rounded text-xs">
            Minor
            <span className="absolute -top-2 -right-2 bg-green-300 text-white text-xs px-1 rounded-full">14</span>
          </div>
          <div className="relative bg-yellow-400 text-white px-2 py-0.5 rounded text-xs">
            Major
            <span className="absolute -top-2 -right-2 bg-yellow-300 text-white text-xs px-1 rounded-full">0</span>
          </div>
          <div className="relative bg-red-500 text-white px-2 py-0.5 rounded text-xs">
            Critical
            <span className="absolute -top-2 -right-2 bg-red-400 text-white text-xs px-1 rounded-full">0</span>
          </div>
        </div>

        {/* Tools icons */}
        <FaVolumeMute className="cursor-pointer" />
        <FaThLarge className="cursor-pointer" />
        <FaImage className="cursor-pointer" />
        <FaExpand className="cursor-pointer" />
        <FaLanguage className="cursor-pointer" />
        <FaTshirt className="cursor-pointer" />

        {/* User Name */}
        <span className="text-sm font-medium">acrel</span>
      </div>
    </header>
  );
};

export default Navbar;
