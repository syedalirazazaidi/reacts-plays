import { useState, useEffect } from "react";

export default function usePosts() {
  //   const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/post.json");
        const json = await response.json();
        // setPosts(json);
      } catch (error) {
        // setError(error);
      }
    }

    fetchData();
  }, []);
}
