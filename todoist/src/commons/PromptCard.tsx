"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function PromptCard({ post, handleTagClick }: any) {
  const { data: session } = useSession();
  return (
    // <div className="border-2 w-[400px] p-4 m-2 flex items-center rounded-sm">
    //   <Image
    //     src={post?.creator?.image}
    //     width={40}
    //     height={40}
    //     alt="userimage"
    //     className="mr-2 rounded-full"
    //   />
    //   <div>
    //     <p className="font-sans font-semibold text-gray">
    //       {post?.creator?.username}
    //     </p>
    //     <p className=" font-mono  text-gray">{post?.creator?.email}</p>
    //   </div>
    //   <Image
    //     src={"/assets/copy.svg"}
    //     alt="copy"
    //     width={16}
    //     height={16}
    //     className="text"
    //   />
    // </div>
    <div className="border-2 w-full md:w-[400px] p-4 m-2 flex flex-col md:flex-row items-center rounded-sm">
      <Image
        src={post?.creator?.image}
        width={40}
        height={40}
        alt="userimage"
        className="mr-2 rounded-full"
      />
      <div className="text-center md:text-left">
        <p className="font-sans font-semibold text-gray">
          {post?.creator?.username}
        </p>
        <p className="font-mono text-gray">{post?.creator?.email}</p>
      </div>
      <Image
        src={"/assets/copy.svg"}
        alt="copy"
        width={16}
        height={16}
        className="text"
      />
    </div>
  );
}
