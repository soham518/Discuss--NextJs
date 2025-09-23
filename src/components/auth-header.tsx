"use client";
import { signIn } from "@/app/actions/signin";
import { signOut } from "@/app/actions/signout";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut } from "lucide-react";
import { useSession } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
const AuthHeader = () => {
  const session = useSession();
  if(!session.data?.user) return null;
  let authContent: React.ReactNode;
  if (session.data?.user) {
    authContent = (
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="w-10 h-10 rounded-full hover:cursor-pointer overflow-hidden ">
            <AvatarImage src={session.data.user.image || ""} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <h2 className="font-bold text-l">{session.data.user.name}</h2>
          <h2 className="text-l">{session.data.user.email}</h2>
          <Separator className="my-2"></Separator>
          <form action={signOut}>
            <Button type="submit">
              {" "}
              <LogOut></LogOut> Logout
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <form action={signIn}>
          <Button type="submit" variant={"outline"}>
            Sign In
          </Button>
        </form>
        <form action={signIn}>
          <Button type="submit">Sign Up</Button>
        </form>
      </>
    );
  }

  return authContent;
};

export default AuthHeader;
