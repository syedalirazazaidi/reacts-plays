import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserImage({ session }: any) {
  console.log(session, "SESSIOSION");
  return (
    <Avatar>
      <AvatarImage
        src="/assets/mypicnew.jpg"
        width={37}
        height={37}
        className="object-cover"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
