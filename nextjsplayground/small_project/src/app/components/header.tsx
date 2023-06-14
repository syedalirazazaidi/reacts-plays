"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Header() {
  const [searchTerm, setSearchValue] = useState("");
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchValue("");
    router.push(`/${searchTerm}/`);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 bg-slate-600">
      <header className="flex flex-wrap items-center justify-between py-4">
        <h1 className="text-2xl font-bold text-slate-300">
          <Link href="/">WifiRocket</Link>
        </h1>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button className="bg-teal-400 pt-2 pb-2 pl-2 pr-2 ml-2 px-4 py-2 border cursor-pointer border-gray-300 rounded">
            &#128640;
          </button>
        </form>
      </header>
    </div>
  );
}
