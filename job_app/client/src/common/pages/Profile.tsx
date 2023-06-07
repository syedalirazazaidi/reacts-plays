import React, { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import { ToastContext } from "../../contexts/ToastContext";

function Profile() {
  const { isSetOpen, isOpen, setEditFormData }: any =
    useContext(SidebarContext);
  const { showToast }: any = useContext(ToastContext);

  const handleSubmit = (e: any) => {
    showToast("Working on profile section thankyou", "success");
    e.preventDefault();
  };
  return (
    <div className="bg-white rounded-md shadow-lg p-4  ">
      <p className="ml-20 mt-3 text-3xl">Profile</p>
      <form
        className="flex flex-wrap gap-4 justify-start mx-24 my-8"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-80 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="last_name"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="last_name"
            type="text"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input3"
            type="text"
            placeholder="Enter input 3"
          />
        </div>
        <button
          type="submit"
          className={`{
          bg-cyan-200  h-10 mt-7 hover:bg-cyan-900 hover:text-white font-medium  rounded" ${
            !isOpen ? "w-80 rounded ml-1" : "w-96 rounded "
          }`}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Profile;
