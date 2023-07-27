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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function PromptFrom({ namemy }: string) {
  return (
    <>
      <div className="w-1/2 p-4 mx-auto text-center my-[70px]">
        <div className="mb-4">
          <Input type="email" placeholder="Email" />
        </div>
        <div className="mb-4">
          <Textarea placeholder="Type your message here." />
        </div>
        <Button className="mr-auto">Button</Button>;
      </div>
    </>
  );
}
