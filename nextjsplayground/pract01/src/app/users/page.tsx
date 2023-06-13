import React from "react";
import type { Metadata } from "next";
import getAllusers from "../../../lib/getAllusers";
import UsersApiResponse from "../../../types/type";
import Link from "next/link";
interface User {
  id: number;
  name: string;
  username: string;
  email: string;

  phone: string;
  website: string;
}
const metadata: Metadata = {
  title: "Users",
};
export default async function UsersName() {
  const usersData = await getAllusers();

  return (
    <div>
      <h1 className="text-2xl font-bold my-8 text-center">Users</h1>
      <h1 className="text-2xl font-bold my-8 ">
        <Link className="bg-green-200 p-1  font-normal" href="/">
          Back to Home
        </Link>{" "}
      </h1>
      <div className="container mx-auto grid gap-4 grid-cols-3">
        {usersData &&
          usersData?.map(({ name, email, id }: User) => (
            <div
              key={id}
              className="bg-white p-4 rounded shadow cursor-pointer"
            >
              <h2 className="text-xl font-bold">
                <Link href={`/users/${id}`}>{name}</Link>
              </h2>
              <p className="text-gray-500">{email}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
