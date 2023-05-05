import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LogOutMenu from "../components/LogoutMenu";
import myMenu from "../../assets/menu-line.png";

function Navbar() {
  return (
    <div className="flex justify-between  mt-8 -mb-4 px-4">
      <img
        src={myMenu}
        alt="My Image"
        className="h-10 w-10 object-cover  rounded-full hover:cursor-pointer ml-64"
      />
      <p className="bg-#ffffff h-20 mr-16">Dashboard</p>

      <LogOutMenu />
    </div>
  );
}

export default Navbar;
