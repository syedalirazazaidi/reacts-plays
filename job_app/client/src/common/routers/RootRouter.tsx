import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../../modules/users/components/Login";
import SignUpForm from "../../modules/users/components/Register";
import AddJob from "../pages/AddJob";
import AllJobs from "../pages/AllJobs";
import NotFound404 from "../pages/NotFound404";
import Profile from "../pages/Profile";
import Stats from "../pages/Stats";
import Dashboard from "../pages/Dashboard";
import { useAuthContext } from "../../modules/users/hooks/useUser";
const DEMO_USER = {
  TEST_USER: "Test User",
};
const CURRENT = DEMO_USER.TEST_USER;
export default function RootRouter() {
  const { user }: any = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUpForm />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/"
          element={user?.token ? <Dashboard /> : <Navigate to="/" />}
        >
          <Route path="/dashboard" element={<Stats />} />
          <Route path="/all-job" element={<AllJobs />} />
          <Route path="/add-jobs" element={<AddJob />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
