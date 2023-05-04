import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LogOutMenu from "../components/LogoutMenu";

function Navbar() {
  return (
    <nav>
      <i className="ri-menu-3-line"></i>
      <p className="bg-#ffffff h-20">Dashboard</p>
      <LogOutMenu />
    </nav>
  );
}

export default Navbar;
