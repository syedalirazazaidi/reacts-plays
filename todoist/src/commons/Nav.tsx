"use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";

// export default function Nav() {
//   const [first, setfirst] = useState("second");
//   useEffect(() => {
//     return () => {
//       "second";
//     };
//   }, []);

//   return (
//     <div>
//       Nav
//       <Link href=""></Link>
//       <Image src="" alt="" />
//     </div>
//   );
// }

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isUserLoggedIn = true;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <div className="text-teal text-xl font-bold">Agility</div>
        </Link>
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
          {!isUserLoggedIn ? (
            <div className="flex gap-2 sm:text-teal-100 flex-col lg:flex-row">
              <Link href="/">
                <Button className="bg-gray-400 text-teal hover:text-gray-200 px-8 py-1 block w-36">
                  Create Post
                </Button>
              </Link>
              <Link href="/">
                <Button className="bg-gray-400 text-teal hover:text-gray-200 px-8 py-1 block w-36">
                  Sign Out
                </Button>
              </Link>
            </div>
          ) : (
            <Link href="/">
              <Button className="bg-gray-400 text-teal hover:text-gray-200 px-8 py-1 block">
                SignIn
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
