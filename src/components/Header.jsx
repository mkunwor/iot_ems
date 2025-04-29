import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="w-full bg-white shadow flex justify-between items-center px-6 py-3">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold">IOT EMS Platform</h1>
        <span className="text-sm text-cyan-600 bg-cyan-100 px-2 py-1 rounded">Main Dashboard</span>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-black">
          <FaSearch />
        </button>
        <div className="flex gap-1 items-center">
          <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">Minor</span>
          <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded">Major</span>
          <span className="bg-red-200 text-red-800 text-xs px-2 py-1 rounded">Critical</span>
        </div>
        <FaBell className="text-xl text-gray-600" />
        <FaUserCircle className="text-2xl text-gray-700" />
        <span className="font-medium">acrel</span>
      </div>
    </div>
  );
};

export default Header;
