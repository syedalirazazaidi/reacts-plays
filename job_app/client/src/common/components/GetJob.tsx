import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import axios from "axios";
import { EditButtonContext } from "../../contexts/EditButtonContext";
import { useNavigate } from "react-router-dom";

function GetJob({ job, deleteJob, editJob }: any) {
  //   const [job, setJob] = useState<any>([]);
  const [jobget, Setjobget] = useState(job.jobs ?? []);

  const { isSetOpen, isOpen }: any = useContext(SidebarContext);
  const { setEditFormData }: any = useContext(EditButtonContext);
  const navigate = useNavigate();

  //   console.log(job?.jobs[0]);
  //   if (job.jobs.length ?? []) {
  //     return <p>loading</p>;
  //   }

  //   if (job.jobs.length !== 0) {
  //     <p>loading</p>;
  //     // return <p>loading...</p>;
  //   }

  //   if (job.jobs.length !== 0) {
  //     console.log("first");
  //   } else {
  //     console.log("loading");
  //   }
  const editClick = (data: any) => {
    setEditFormData(data);
    navigate("/add-jobs");
  };

  return (
    <div>
      <p className="text-gray-700 font-bold text-lg ml-10 mb-4">
        {job?.jobs && job?.jobs.length} jobs Found
      </p>
      <div className="grid grid-cols-2 gap-4">
        {job?.jobs &&
          job?.jobs &&
          job?.jobs.map((data: any, index: any) => (
            <div
              key={index}
              className="bg-white rounded-md  mx-8 shadow-md p-4 px-12"
            >
              <div className="flex">
                <div className="px-2">
                  <div className="flex gap-10">
                    <div>
                      {" "}
                      <p className="bg-teal-400  text-center pt-3 text-gray-600 rounded-md text-3xl w-16 h-16">
                        {data?.company
                          .split("")
                          .slice(0, 1)
                          .join()
                          .toUpperCase()}
                      </p>
                    </div>
                    <div>
                      <p className="capitalize text-xl"> {data?.position}</p>
                      <p className="capitalize text-base text-cyan-700">
                        {" "}
                        {data?.company}
                      </p>
                    </div>
                  </div>
                  <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-fit" />
                  <div className="flex gap-14 -mt-8">
                    <div>
                      <div className="flex gap-4">
                        <i className="ri-map-pin-line"></i>
                        <p className="capitalize text-sm "> {data?.location}</p>
                      </div>

                      <div className="flex gap-4 mt-2">
                        <i className="ri-briefcase-2-line"></i>

                        <p className="capitalize text-base text-gray-600">
                          {" "}
                          {data?.job_type}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-4">
                        <i className="ri-calendar-2-line"></i>
                        <p>
                          {" "}
                          {new Date(data?.createdAt).toLocaleString("en-US")}
                        </p>
                        {/* <p>{data?.createdAt}</p> */}
                      </div>
                      <div>
                        <button className="p-1 rounded px-3 bg-amber-300 text-amber-50 mt-2">
                          <p>{data?.status}</p>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 mt-3">
                    <button
                      // onClick={() => editJob(data)}
                      // onClick={() => setEditFormData(data)}
                      onClick={() => editClick(data)}
                      className="bg-green-50 text-green-300 px-6 py-1 rounded hover:bg-green-100 hover:text-green-500"
                    >
                      edit
                    </button>
                    <button
                      onClick={() => deleteJob(data._id)}
                      className="bg-red-50 text-red-300 px-6 py-1 rounded hover:bg-red-100 hover:text-red-500"
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default GetJob;
