import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
interface FormData {
  name: string;
  email: string;
  password: string;
}
function SignUpForm() {
  const [signUpForm, setSignUpForm] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        signUpForm
      );
      console.log(response);
      console.log(response.data); // Handle the response from the server
    } catch (error) {
      console.error(error);
    } // You can perform form submission logic here
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h2 className="h-20 text-center  font-semi text-3xl">Register</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Username"
              name="name"
              value={signUpForm.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={signUpForm.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="********"
              value={signUpForm.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Submit
            </button>
          </div>
          <div className="flex items-center justify-between py-4">
            <button
              className="bg-blue-200 hover:bg-blue-700 text-white font-medium py-1 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Demo App
            </button>
          </div>
          <p className="text-center">
            {" "}
            Already a member?
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 "
              href="/"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
