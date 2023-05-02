import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 px-8 py-12  flex flex-col h-screen bg-white">
      {/* <div className="mb-8">
        <h2 className="text-white text-lg font-medium">My Sidebar</h2>
      </div> */}
      <nav>
        <ul className="space-y-8 text-base ">
          <li className="mb-2 ">
            <Link to="/dashboard" className=" text-#dfe2e6 hover:text-#dfe2e6 ">
              <div className="flex gap-2">
                <i className="ri-bar-chart-box-line "></i>
                Stats
              </div>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/all-job" className="text-#dfe2e6 hover:text-#dfe2e6">
              <div className="flex gap-2">
                <i className="ri-file-search-fill"></i>
                All Jobs
              </div>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/add-jobs" className="text-#dfe2e6 hover:text-#dfe2e6">
              <div className="flex gap-2">
                <i className="ri-file-add-line"></i>
                Add jobs
              </div>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/profile" className="text-#dfe2e6 hover:text-#dfe2e6">
              <div className="flex gap-2">
                <i className="ri-profile-line"></i>
                Profile
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;