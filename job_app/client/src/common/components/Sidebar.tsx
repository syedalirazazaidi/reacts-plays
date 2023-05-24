import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { SidebarContext } from "../../contexts/SidebarContext";
import { ISHow } from "../types/type";
const Sidebar: React.FC = () => {
  const { isOpen }: any = useContext(SidebarContext);

  return (
    <div className={` ${!isOpen ? "ease-in-out duration-900" : ""}`}>
      {!isOpen && !isOpen ? (
        <div>
          <div className="absolute top-10 left-8 text-amber-600 font-semibold text-3xl">
            Job App
          </div>
          <div className="ml-48 -mt-30 "></div>
          <div className="w-64 px-8 py-12  flex flex-col h-screen bg-white">
            <nav>
              <ul className="space-y-8 text-base ">
                <li className="mb-2 ">
                  <Link
                    to="/dashboard"
                    className=" text-#dfe2e6 hover:text-#dfe2e6 "
                  >
                    <div className="flex gap-2 text-2xl text-amber-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:translate-x-1 hover:scale-110  duration-300">
                      <i className="ri-bar-chart-box-line "></i>
                      Stats
                    </div>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/all-job"
                    className="text-#dfe2e6 hover:text-#dfe2e6"
                  >
                    {/* absolute -bottom-1 left-0 w-0 h-2 bg-blue-400 transition-all
                    group-hover:w-full */}
                    <div className="flex gap-2 text-2xl text-amber-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:translate-x-1 hover:scale-110  duration-300">
                      <i className="ri-file-search-fill "></i>
                      All Jobs
                    </div>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/add-jobs"
                    className="text-#dfe2e6 hover:text-#dfe2e6"
                  >
                    <div className="flex gap-2 text-2xl text-amber-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:translate-x-1 hover:scale-110  duration-300">
                      <i className="ri-file-add-line"></i>
                      Add jobs
                    </div>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/profile"
                    className="text-#dfe2e6 hover:text-#dfe2e6"
                  >
                    <div className="flex gap-2 text-2xl text-amber-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:translate-x-1 hover:scale-110  duration-300">
                      <i className="ri-profile-line"></i>
                      Profile
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;
