"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function PromptCard({ post, handleTagClick }: any) {
  const { data: session } = useSession();
  return (
    <div className="bg-red-600">
      <Image
        src={post?.creator?.image}
        width={40}
        height={40}
        alt="userimage"
      />
      {post?.creator?.username}
      {post?.creator?.email}
    </div>
  );
}
