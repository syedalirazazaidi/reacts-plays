"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
interface PropinputType {
  prompt: string;
  tag: string;
}
interface PropsFormType {
  type: string;
  post: PropinputType;
  setPost: (post: PropinputType) => void;
  submitting: boolean;
  handleSubmit: (e: any) => Promise<void>;
}
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function PromptFrom({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}: PropsFormType) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-1/2 p-4 mx-auto text-center my-[70px]">
          <div className="mb-4">
            <Input
              value={post.tag}
              onChange={(e) => setPost({ ...post, tag: e.target.value })}
              type="text"
              placeholder="#Tag"
              required
            />
          </div>
          <div className="mb-4">
            <Textarea
              value={post.prompt}
              onChange={(e) => setPost({ ...post, prompt: e.target.value })}
              required
              placeholder="Type your message here."
            />
            <label
              htmlFor="message"
              className="block font-semibold text-sm text-gray-700"
            >
              Field of Prompt{" "}
              <span className=" text-sm text-start">
                (#product, #webdevelopment, #idea, etc.)
              </span>
            </label>
          </div>
          <Button
            type="submit"
            className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
