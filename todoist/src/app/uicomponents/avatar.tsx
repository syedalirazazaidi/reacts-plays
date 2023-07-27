import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserImage({ session }: any) {
  return (
    <Avatar>
      <AvatarImage
        src={session && session?.image}
        width={37}
        height={37}
        className="object-cover"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
