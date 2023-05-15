import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LogOutMenu from "../components/LogoutMenu";
import myMenu from "../../assets/menu-line.png";
import { SidebarContext } from "../../contexts/SidebarContext";

function Navbar() {
  const { isSetOpen, isOpen }: any = useContext(SidebarContext);
  return (
    <div className="flex justify-between  mt-8 -mb-4 px-10 relative">
      <img
        className={`h-10 w-10 object-cover  rounded-full hover:cursor-pointer ease-in-out duration-300 ${
          isOpen ? "ml-40" : "ml-64"
        }`}
        src={myMenu}
        onClick={() => isSetOpen(!isOpen)}
        alt="My Image"
      />
      <p className="bg-#ffffff h-20 pt-2 mr-16 text-amber-600 font-medium text-3xl">
        Dashboard
      </p>

      <LogOutMenu />
    </div>
  );
}

export default Navbar;
