import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import { EditButtonContext } from "../../contexts/EditButtonContext";
import { useNavigate } from "react-router-dom";
import Pagination from "./pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

function GetJob({ deleteJob, editJob, searchResults, pageNumber, id }: any) {
  const { isSetOpen, isOpen }: any = useContext(SidebarContext);
  const { setEditFormData }: any = useContext(EditButtonContext);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const editClick = (data: any) => {
    setEditFormData(data);
    navigate("/add-jobs");
  };
  const changepagination = (changePagination: any) => {
    console.log(changePagination);
    setPage(2);
  };
  const pagination = () => {};
  console.log(pageNumber);
  return (
    <div>
      <p className="text-gray-700 font-bold text-lg ml-10 mb-4">
        {searchResults && searchResults.length} jobs Found
      </p>
      <div className="grid grid-cols-2 gap-4">
        {searchResults &&
          searchResults &&
          searchResults?.map((data: any, index: any) => (
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

      <div className="flex items-center justify-between  border-gray-200 bg-none px-4 py-8 mt-8 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center  sm:justify-between">
          {/* <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">97</span> results
          </p>
        </div> */}
          <div>
            {searchResults?.length > 0 && (
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                <span onClick={() => changepagination(pageNumber)}>
                  <a
                    aria-current="page"
                    // className="cursor-pointer relative z-10 inline-flex items-center bg-grey-700 px-4 py-2 text-sm font-semibold text-black focus:z-20 border  border-black-300  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
                  >
                    {pageNumber}
                  </a>
                </span>

                {/* {[...Array(searchResults.length)].map((_, i: any) => {
                  return (
                    <span onClick={() => changepagination(i + 1)} key={i}>
                      <a
                        aria-current="page"
                        className="cursor-pointer relative z-10 inline-flex items-center bg-grey-700 px-4 py-2 text-sm font-semibold text-black focus:z-20 border  border-black-300  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
                      >
                        {" "}
                        {i + 1}{" "}
                      </a>
                    </span>
                  );
                })} */}
                <a className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetJob;
