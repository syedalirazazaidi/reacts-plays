import axios from "axios";
import React, { useContext, useState, ChangeEvent, FormEvent } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import MainLayout from "../layout/MainLayout";
import { AddJobType } from "../types/type";

function AddJob() {
  const [addJob, setAddJob] = useState<AddJobType>({
    position: "",
    company: "",
    location: "",
    status: "",
    job_type: "",
  });

  const { isSetOpen, isOpen }: any = useContext(SidebarContext);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setAddJob((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: FormEvent) => {
    const addjobdata = {
      position: addJob.position,
      company: addJob.company,
      location: addJob.location,
      status: addJob.status,
      job_type: addJob.job_type,
    };
    console.log(addjobdata);

    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/jobs", addjobdata)
      .then((data: any) => {
        console.log("Form submitted successfully:", data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div
      className={` shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
        !isOpen
          ? "bg-white rounded-md  shadow-lg p-4"
          : "bg-white rounded-md  shadow-lg p-4 pl-16"
      }`}
    >
      <p className="ml-24 mt-3 text-3xl">Add Job</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-4 content-center justify-start mx-24 my-8"
      >
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
            value={addJob.position}
            onChange={handleChange}
            name="position"
            id="position"
            type="text"
            placeholder="position"
            required
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
            id="company"
            value={addJob.company}
            onChange={handleChange}
            type="text"
            placeholder="company"
            required
            name="company"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="location"
          >
            Job Location
          </label>
          <input
            className={` shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
              !isOpen ? "w-80" : "w-96"
            }`}
            id="location"
            type="text"
            name="location"
            value={addJob.location}
            onChange={handleChange}
            placeholder="job location"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Status
          </label>
          <select
            id="status"
            className={`shadow  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
              !isOpen ? "w-80" : "w-96"
            }`}
            name="status"
            value={addJob.status}
            onChange={handleChange}
            required
          >
            <option value="">Select a status</option>
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
            id="job_type"
            className={`shadow  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
              !isOpen ? "w-80" : "w-96"
            }`}
            name="job_type"
            value={addJob.job_type}
            onChange={handleChange}
            required
          >
            <option value="">Select a job type</option>
            <option value="full time">full time</option>
            <option value="part time">part time</option>
            <option value="remote">remote</option>
            <option value="internship">internship</option>
          </select>
        </div>

        <button
          className={`{
  bg-gray-400  h-10 mt-7 hover:bg-gray-700 text-white font-medium  rounded" ${
    !isOpen ? "w-36 rounded" : "w-44 rounded"
  }`}
        >
          Clear
        </button>
        <button
          type="submit"
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
