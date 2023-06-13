import Link from "next/link";
import React, { Suspense } from "react";
import getUser from "../../../../lib/getUser";
import getUserPost from "../../../../lib/getUserPosts";
type Params = {
  params: {
    userId: String;
  };
};

export default async function SingleUser({ params: { userId } }: Params) {
  const usersData = await getUserPost(userId);

  const userData = await getUser(userId);

  //   const [users, user] = await Promise.all([usersData, userData]);

  return (
    <>
      <p className="text-center my-8 text-red-400 underline">{userData.name}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container mx-auto grid gap-4 grid-cols-3">
          {usersData &&
            usersData?.map(({ title, body, id }: any) => (
              <div
                key={id}
                className="bg-white p-4 rounded shadow cursor-pointer"
              >
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-500">{body}</p>
              </div>
            ))}
        </div>
      </Suspense>
    </>
  );
}
