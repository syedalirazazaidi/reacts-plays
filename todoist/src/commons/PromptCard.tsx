"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function PromptCard({ post, handleTagClick }: any) {
  const { data: session } = useSession();
  const [copied, isSetCopied] = useState(false);

  return (
    <div>
      <div className="border-2 w-full md:w-[400px] p-4 m-2 md:h-[140px] rounded-sm">
        <div className="flex flex-col md:flex-row items-center">
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
          <div className="ml-[26px] cursor-pointer" onClick={() => {}}>
            <Image
              src={
                copied === post.prompt ? "/assets/copy.svg" : "/assets/tick.svg"
              }
              alt="copy"
              width={20}
              height={20}
              className="text cursor-pointer "
            />
          </div>
        </div>
        <div className="md:text-left mt-4 text-center">
          <p>{post.prompt}</p>
        </div>
      </div>
    </div>
  );
}
