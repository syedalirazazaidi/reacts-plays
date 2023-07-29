"use client";

import { Input } from "@/components/ui/input";
import { useState, useEffect, ChangeEvent } from "react";

export default function Feed() {
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    // clearTimeout(searchTimeout);
    // setSearchText(e.target.value);
    // // debounce method
    // setSearchTimeout(
    //   setTimeout(() => {
    //     const searchResult = filterPrompts(e.target.value);
    //     setSearchedResults(searchResult);
    //   }, 500)
    // );
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <section className="flex justify-center items-center  h-60">
      <form className="relative">
        <Input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          className="w-64 md:w-[400px]"
          required
        />
      </form>

      {/* All Prompts */}
      {/* {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )} */}
    </section>
  );
}
