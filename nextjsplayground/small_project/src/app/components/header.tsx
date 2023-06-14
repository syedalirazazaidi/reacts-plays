"use client";
import React, { useState } from "react";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchValue("");
    console.log(searchValue, "VALUE");
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 bg-slate-600">
      <header className="flex flex-wrap items-center justify-between py-4">
        <h1 className="text-2xl font-bold text-slate-300">WifiRocket</h1>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded"
            value={searchValue}
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
