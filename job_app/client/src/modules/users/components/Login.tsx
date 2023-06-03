import axios from "axios";
import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDemo } from "../hooks/useDemo";
import { useLogin } from "../hooks/useLogin";

interface LoginInData {
  email: string;
  password: string;
}
function Login() {
  const navigate = useNavigate();
  const { login, error, isLoading } = useLogin();
  const { demo } = useDemo();

  const [token, setToken] = useState();
  const [loginInForm, setLogInForm] = useState<LoginInData>({
    email: "",
    password: "",
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogInForm((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await login(loginInForm.email, loginInForm.password);

    navigate("/dashboard");
  };
  const handleDemoClick = async (e: any) => {
    const userRole = "Test User"; // Replace with actual user role retrieval logic

    e.preventDefault();
    axios
      .get(`http://localhost:5000/api/v1/demo/${userRole}`)

      .then((response) => {
        // Handle the successful response from the backend
        const data = response.data;
        console.log(data, "DATA");
        // Process and use the retrieved data as needed
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="w-full max-w-sm">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h2 className="h-20 text-center  font-semi text-3xl">Login</h2>
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
              value={loginInForm.email}
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
              placeholder="********"
              name="password"
              value={loginInForm.password}
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
              type="submit"
              onClick={handleDemoClick}
            >
              Demo App
            </button>
          </div>
          <p className="text-center">
            {" "}
            Not a member yet?
            {/* <Link to="/dashboard">Login</Link> */}
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 "
              href="/register"
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
