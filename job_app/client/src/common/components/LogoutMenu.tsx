// import { Menu } from "@headlessui/react";
// import { useState } from "react";
// import { Dialog } from "@headlessui/react";
// import React from "react";

// function LogoutMenu() {
//   return (
//     <div>
//       <button
//         id="dropdownDividerButton"
//         data-dropdown-toggle="dropdownDivider"
//         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         type="button"
//       >
//         Dropdown divider{" "}
//         <svg
//           className="w-4 h-4 ml-2"
//           aria-hidden="true"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="2"
//             d="M19 9l-7 7-7-7"
//           ></path>
//         </svg>
//       </button>

//       <div
//         id="dropdownDivider"
//         className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
//       >
//         <ul
//           className="py-2 text-sm text-gray-700 dark:text-gray-200"
//           aria-labelledby="dropdownDividerButton"
//         >
//           <li>
//             <a
//               href="#"
//               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//             >
//               Dashboard
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//             >
//               Settings
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//             >
//               Earnings
//             </a>
//           </li>
//         </ul>
//         <div className="py-2">
//           <a
//             href="#"
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//           >
//             Separated link
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LogoutMenu;

import { useState } from "react";

const LogoutMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-800 text-white font-bold py-2 px-4 rounded"
        onClick={toggleDropdown}
      >
        <i className="ri-user-line"></i>
      </button>
      {isOpen && (
        <div className="absolute top-12 right-0 bg-white rounded-lg shadow-lg">
          <ul>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
              >
                Item 1
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LogoutMenu;
