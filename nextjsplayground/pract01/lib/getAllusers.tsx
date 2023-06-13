import React from "react";
import UsersApiResponse from "../types/type";

// export default function getAllusers() {
//   return <div>getAllusers</div>;
// }
export default async function getAllusers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
    
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
