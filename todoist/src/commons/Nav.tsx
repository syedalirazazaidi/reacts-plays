"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserImage } from "@/app/uicomponents/avatar";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [providers, setProviders] = useState<any>(null);
  const isUserLoggedIn = true;

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const providersData = await getProviders();
        setProviders(providersData);
      } catch (error) {
        console.error("Error fetching authentication providers:", error);
      }
    };
    fetchProviders();
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 py-3">
      <div className="container mx-auto px-12 flex items-center justify-between">
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
          {session?.user ? (
            <div className="flex gap-2 sm:text-teal-100  flex-col lg:flex-row">
              <Link href="/create-prompt">
                <Button className="bg-gray-400 text-teal hover:text-gray-200 px-8 py-1 block w-36">
                  Create Post
                </Button>
              </Link>
              <Link href="/">
                <Button
                  className="bg-gray-400 text-teal hover:text-gray-200 px-8 py-1 block w-36"
                  onClick={() => signOut()}
                >
                  Sign Out
                </Button>
              </Link>
              <Link href="/">
                <UserImage session={session} />
              </Link>
            </div>
          ) : (
            <>
              {" "}
              {providers &&
                Object?.values(providers).map((provider: any) => (
                  <Button
                    key={provider.name}
                    className="bg-gray-400 text-teal hover:text-gray-200 px-8 py-1 block"
                    onClick={() => signIn(provider.id)}
                  >
                    SignIn
                  </Button>
                ))}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
