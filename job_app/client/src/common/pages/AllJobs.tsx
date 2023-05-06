import React, { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import GetJob from "../components/GetJob";
import MainLayout from "../layout/MainLayout";

function AllJobs() {
  const { isSetOpen, isOpen }: any = useContext(SidebarContext);

  return (
    <>
      <div
        className={` shadow appearance-none border rounded mx-8 my-4 p-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
          !isOpen
            ? "bg-white rounded-md  shadow-lg p-4"
            : "bg-white rounded-md  shadow-lg p-4 pl-16"
        }`}
      >
        <p className="ml-20 mt-3 text-3xl">Search Form</p>
        <form className="flex flex-wrap gap-4 justify-start mx-20 my-8">
          <div className="mb-4 ">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="search"
            >
              Search
            </label>
            <input
              className={` shadow appearance-none border rounded h-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
                !isOpen ? "w-80" : "w-96"
              }`}
              id="search"
              type="text"
              placeholder="search"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <select
              id="job_type"
              className={`shadow  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
                !isOpen ? "w-80" : "w-96"
              }`}
              name="job_type"
              // value={addJob.job_type}
              // onChange={handleChange}
              required
            >
              <option value="all">all</option>
              <option value="interview">interview</option>
              <option value="declined">declined</option>
              <option value="pending">pending</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="type"
            >
              Type
            </label>
            <select
              id="job_type"
              className={`shadow  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
                !isOpen ? "w-80" : "w-96"
              }`}
              name="job_type"
              // value={addJob.job_type}
              // onChange={handleChange}
              required
            >
              <option value="all">all</option>
              <option value="full-time">full-time</option>
              <option value="part-time">part-time</option>
              <option value="remote">remote</option>
              <option value="internship">internship</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="sort"
            >
              Sort
            </label>
            <select
              id="job_type"
              className={`shadow  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
                !isOpen ? "w-80" : "w-96"
              }`}
              name="job_type"
              // value={addJob.job_type}
              // onChange={handleChange}
              required
            >
              <option value="latest">latest</option>
              <option value="oldest">oldest</option>
              <option value="a-z">a-z</option>
              <option value="z-a">z-a</option>
            </select>
          </div>
          <button
            type="submit"
            className={`{
          bg-amber-600  h-10 mt-7 hover:bg-amber-500 text-white font-medium  rounded" ${
            !isOpen ? "w-80 rounded ml-1" : "w-96 rounded "
          }`}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="mx-8 my-16">
        <GetJob />
      </div>
    </>
  );
}

export default AllJobs;
