import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 w-64 px-4 py-6 flex flex-col h-screen">
      <div className="mb-8">
        <h2 className="text-white text-lg font-medium">My Sidebar</h2>
      </div>
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/all-jobs" className="text-gray-300 hover:text-white">
              Link 1
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/add-job" className="text-gray-300 hover:text-white">
              Link 2
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/profile" className="text-gray-300 hover:text-white">
              Link 3
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
