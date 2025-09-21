import { signIn } from "@/app/actions/signin";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
import { signOut } from "@/app/actions/signout";
const HeaderPage = async () => {
  const session = await auth();
  return (
    <>
      <div className="grid grid-cols-3 mt-4">
        <div className="flex justify-start">
          <h2 className="font-bold text-xl">Discuss</h2>
        </div>
        <div className="flex justify-center">
          <Input type="text" placeholder="search post..."></Input>
        </div>
        <div className="flex justify-end items-center gap-2">
          {session?.user ? (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="w-10 h-10 rounded-full hover:cursor-pointer overflow-hidden ">
                  <AvatarImage src={session.user.image || ""} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent>
                <h2 className="font-bold text-l">{session.user.name}</h2>
                <h2 className="text-l">{session.user.email}</h2>
                <Separator className="my-2"></Separator>
                <form action={signOut}>
                  <Button type="submit">
                    {" "}
                    <LogOut></LogOut> Logout
                  </Button>
                </form>
              </PopoverContent>
            </Popover>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
