"use client";

import { Input } from "@/components/ui/input";
import { useState, useEffect, ChangeEvent } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }: any) => {
  return (
    <div className="grid grid-cols-2 gap-4 ml-[200px]">
      {data.map((post: any) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

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
  const handleTagClick = (tagName: any) => {
    setSearchText(tagName);

    // const searchResult = filterPrompts(tagName);
    // setSearchedResults(searchResult);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="">
      <form className="relative flex justify-center items-center  h-60">
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
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
}
