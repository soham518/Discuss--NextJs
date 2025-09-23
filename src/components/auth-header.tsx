"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";

const AuthHeader = () => {
  const session = useSession();

  if (session.status === "loading") return <div>Loading...</div>;

  // Logged-in user
  if (session.data?.user) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="w-10 h-10 rounded-full hover:cursor-pointer overflow-hidden">
            <AvatarImage src={session.data.user.image || ""} alt="@user" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-4 bg-white shadow-lg rounded-xl">
          <h2 className="font-bold text-lg">{session.data.user.name}</h2>
          <h3 className="text-sm text-gray-500">{session.data.user.email}</h3>
          <Separator className="my-3" />
          <Button
            type="button"
            onClick={() => signOut()}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white"
          >
            <LogOut /> Logout
          </Button>
        </PopoverContent>
      </Popover>
    );
  }

  // Not logged in
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="px-4 py-2 rounded-full">
          Sign In
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-4 bg-white shadow-lg rounded-xl flex flex-col gap-3">
        <h2 className="font-semibold text-lg text-center">Sign In</h2>
        <Button
          type="button"
          onClick={() => signIn("github")}
          className="w-full flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white rounded-full"
        >
          <FaGithub size={18} /> Sign in with GitHub
        </Button>

        <Button
          type="button"
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 rounded-full"
        >
          <FcGoogle size={18} /> Sign in with Google
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default AuthHeader;
