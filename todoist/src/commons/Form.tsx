// import Link from "next/link";

// const Form = ({ type, post, setPost, submitting, handleSubmit }: any) => {
//   return (
//     <section className="w-full max-w-full flex-start flex-col">
//       <h1 className="head_text text-left">
//         <span className="blue_gradient">{type} Post</span>
//       </h1>
//       <p className="desc text-left max-w-md">
//         {type} and share amazing prompts with the world, and let your
//         imagination run wild with any AI-powered platform
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
//       >
//         <label>
//           <span className="font-satoshi font-semibold text-base text-gray-700">
//             Your AI Prompt
//           </span>

//           <textarea
//             value={post.prompt}
//             onChange={(e) => setPost({ ...post, prompt: e.target.value })}
//             placeholder="Write your post here"
//             required
//             className="form_textarea "
//           />
//         </label>

//         <label>
//           <span className="font-satoshi font-semibold text-base text-gray-700">
//             Field of Prompt{" "}
//             <span className="font-normal">
//               (#product, #webdevelopment, #idea, etc.)
//             </span>
//           </span>
//           <input
//             value={post.tag}
//             onChange={(e) => setPost({ ...post, tag: e.target.value })}
//             type="text"
//             placeholder="#Tag"
//             required
//             className="form_input"
//           />
//         </label>

//         <div className="flex-end mx-3 mb-5 gap-4">
//           <Link href="/" className="text-gray-500 text-sm">
//             Cancel
//           </Link>

//           <button
//             type="submit"
//             disabled={submitting}
//             className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
//           >
//             {submitting ? `${type}ing...` : type}
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Form;
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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
