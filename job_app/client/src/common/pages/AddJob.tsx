import React, { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import MainLayout from "../layout/MainLayout";

function AddJob() {
  const { isSetOpen, isOpen }: any = useContext(SidebarContext);
  return (
    <div
      className={` shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
        !isOpen
          ? "bg-white rounded-md  shadow-lg p-4"
          : "bg-white rounded-md  shadow-lg p-4 pl-16"
      }`}
    >
      <p className="ml-24 mt-3 text-3xl">Add Job</p>
      <form className="flex flex-wrap gap-4 content-center justify-start mx-24 my-8">
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="position"
          >
            Position
          </label>
          <input
            className={` shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
              !isOpen ? "w-80" : "w-96"
            }`}
            id="input1"
            type="text"
            placeholder="position"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="company"
          >
            Company
          </label>
          <input
            className={` shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
              !isOpen ? "w-80" : "w-96"
            }`}
            id="input2"
            type="text"
            placeholder="company"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="input3"
          >
            Job Location
          </label>
          <input
            className={` shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
              !isOpen ? "w-80" : "w-96"
            }`}
            id="input3"
            type="text"
            placeholder="job location"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="countries"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Status
          </label>
          <select
            id="status"
            className={`shadow  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
              !isOpen ? "w-80" : "w-96"
            }`}
          >
            <option value="declined">declined</option>
            <option value="interview">Interview</option>
            <option value="FR">pending</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="countries"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Job Type
          </label>
          <select
            id="status"
            className={`shadow  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
              !isOpen ? "w-80" : "w-96"
            }`}
          >
            <option value="declined">full time</option>
            <option value="interview">part time</option>
            <option value="FR">remote</option>
            <option value="FR">internship</option>
          </select>
        </div>

        {/* <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="input3"
          >
            job Type
          </label>
          <input
            className={` shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
              !isOpen ? "w-80" : "w-96"
            }`}
            id="input3"
            type="text"
            placeholder="job type"
          />
        </div> */}
        <button
          className={`{
  bg-gray-400  h-10 mt-7 hover:bg-gray-700 text-white font-medium  rounded" ${
    !isOpen ? "w-36 rounded" : "w-44 rounded"
  }`}
        >
          Clear
        </button>
        <button
          className={`{
          bg-amber-600  h-10 mt-7 hover:bg-amber-500 text-white font-medium  rounded" ${
            !isOpen ? "w-36 rounded ml-4" : "w-44 rounded ml-4"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddJob;
