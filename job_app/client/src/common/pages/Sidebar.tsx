import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 w-64 px-4 py-6 flex flex-col h-screen">
      <div className="mb-8">
        <h2 className="text-white text-lg font-medium">My Sidebar</h2>
      </div>
      <nav>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white">
              Link 1
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white">
              Link 2
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white">
              Link 3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
