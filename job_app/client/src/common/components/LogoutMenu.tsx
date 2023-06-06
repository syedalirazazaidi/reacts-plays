import { useState, useContext } from "react";
import { useLogout } from "../../modules/users/hooks/useLogout";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../modules/users/hooks/useUser";
import { ToastContext } from "../../contexts/ToastContext";

const LogoutMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useLogout();
  const { user }: any = useAuthContext();
  const { showToast }: any = useContext(ToastContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    logout();
    showToast("Logout successfully", "success");

    navigate("/");
  };

  const { name } = user?.user;

  return (
    <div className="relative">
      <button
        className="bg-amber-600 text-white font-bold py-2 w-32 px-4 rounded"
        onClick={toggleDropdown}
      >
        <i className="ri-user-line "> {name}</i>
      </button>
      {user && user?.name}
      {isOpen && (
        <div className="absolute top-12 right-0 bg-white rounded-lg shadow-lg">
          <ul>
            <li>
              <a className="block px-4 py-2 text-gray-800  w-32 hover:bg-gray-400">
                <button onClick={handleLogout}> Log Out</button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LogoutMenu;
