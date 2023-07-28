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
        <div className="p-4 text-center md:w-1/2 md:mx-auto md:text-left md:my-70">
          <div className="mb-4">
            <Input
              value={post.tag}
              onChange={(e) => setPost({ ...post, tag: e.target.value })}
              type="text"
              placeholder="#Tag"
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Textarea
              value={post.prompt}
              onChange={(e) => setPost({ ...post, prompt: e.target.value })}
              required
              placeholder="Type your message here."
              className="w-full"
              rows={4}
            />
            <label
              htmlFor="message"
              className="block font-semibold text-[10px] text-gray-700"
            >
              Field of Prompt{" "}
              <span className=" block md:inline text-start">
                (#product, #webdevelopment, #idea, etc.)
              </span>
            </label>
          </div>
          <Button
            type="submit"
            className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-blue-600 w-full"
          >
            Submit
          </Button>
        </div>
      </form>

      {/* <form onSubmit={handleSubmit}>
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
      </form> */}
    </>
  );
}
