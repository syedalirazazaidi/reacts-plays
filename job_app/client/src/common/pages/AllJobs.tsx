import React from "react";
import MainLayout from "../layout/MainLayout";

function AllJobs() {
  return (
    <div className="bg-white rounded-md shadow-lg p-4  ">
      {/* <h2 className="text-lg font-semibold mb-2">Card Title</h2> */}
      <form className="flex flex-wrap gap-4 justify-start mx-24 my-8">
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="input1"
          >
            Input 1
          </label>
          <input
            className="w-80 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input1"
            type="text"
            placeholder="Enter input 1"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="input2"
          >
            Input 2
          </label>
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input2"
            type="text"
            placeholder="Enter input 2"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="input3"
          >
            Input 3
          </label>
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input3"
            type="text"
            placeholder="Enter input 3"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="input3"
          >
            Input 3
          </label>
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input3"
            type="text"
            placeholder="Enter input 3"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="input3"
          >
            Input 3
          </label>
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input3"
            type="text"
            placeholder="Enter input 3"
          />
        </div>
      </form>
    </div>
  );
}

export default AllJobs;
