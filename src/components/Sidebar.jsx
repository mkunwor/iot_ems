import React, { useState } from "react";
import {
  FaChartBar, FaUsers, FaLightbulb, FaTemperatureLow,
  FaMoneyBill, FaSolarPanel, FaBatteryHalf, FaWaveSquare,
  FaBell, FaCogs, FaDatabase, FaFileAlt, FaCog, FaBolt,
  FaTachometerAlt, FaClipboardList, FaWater
} from "react-icons/fa";

const menu = [
  { title: "Main Dashboard", icon: <FaTachometerAlt />, submenu: false },
  { title: "Dashboard", icon: <FaClipboardList />, submenu: true },
  { title: "Power Monitoring", icon: <FaWater />, submenu: true, children: [
      "Real-time Monitoring",
      "Power Data",
      "Electric Parameter Report",
      "Electric Report",
      "Extreme Report",
      "Power Factor",
      "Distribution Diagram",
      "Transformer Monitor",
      "Transformer Average Load",
      "Configuration Demo",
      "Running Duration Report"
    ]
  },
  { title: "Energy Analysis", icon: <FaChartBar />, submenu: true },
  { title: "Group energy", icon: <FaUsers />, submenu: true },
  { title: "Lighting", icon: <FaLightbulb />, submenu: true },
  { title: "Wireless Temperature", icon: <FaTemperatureLow />, submenu: true },
  { title: "Prepaid Management", icon: <FaMoneyBill />, submenu: true },
  { title: "Distributed PV", icon: <FaSolarPanel />, submenu: true },
  { title: "Storage Battery", icon: <FaBatteryHalf />, submenu: true },
  { title: "Energy Quality", icon: <FaWaveSquare />, submenu: true },
  { title: "Alarms", icon: <FaBell />, submenu: true },
  { title: "Operation Management", icon: <FaCogs />, submenu: true },
  { title: "Carbon Assets", icon: <FaBolt />, submenu: true },
  { title: "User Report", icon: <FaFileAlt />, submenu: true },
  { title: "Configuration", icon: <FaCog />, submenu: true },
  { title: "Basic Data Management", icon: <FaDatabase />, submenu: true },
];

const Sidebar = ({ setActivePage }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubmenu = (title) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  return (
    <div className="w-64 bg-cyan-800 text-white min-h-screen p-4 overflow-y-auto">
      {/* Logo */}
      <div className="text-2xl font-bold text-white mb-6 px-2">
        ⚡ GridSpectrum
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col space-y-2 text-sm font-medium">
        {menu.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => {
                if (item.submenu) {
                  toggleSubmenu(item.title);
                } else {
                  setActivePage(item.title);
                }
              }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded hover:bg-cyan-700 transition ${
                openMenu === item.title ? "bg-cyan-700" : ""
              }`}
            >
              <div className="flex items-center space-x-2">
                {item.icon}
                <span>{item.title}</span>
              </div>
              {item.submenu && (
                <span className="text-xs">
                  {openMenu === item.title ? "▲" : "▼"}
                </span>
              )}
            </button>

            {/* Submenu Items */}
            {item.submenu && openMenu === item.title && (
              <div className="ml-7 mt-1 text-white/80 space-y-1">
                {item.children?.map((child, idx) => (
                  <div
                    key={idx}
                    className="hover:bg-cyan-600 rounded px-2 py-1 cursor-pointer"
                    onClick={() => setActivePage(child)}
                  >
                    {child}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
