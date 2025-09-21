import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { signIn } from "@/app/actions/signin";
import { signOut } from "@/app/actions/signout";

const HeaderPage = () => {
  return (
    <>
      <div className="grid grid-cols-3 mt-4">
        <div className="flex justify-start">
          <h2 className="font-bold text-xl">Discuss</h2>
        </div>
        <div className="flex justify-center">
          <Input type="text" placeholder="search post..."></Input>
        </div>
        <div className="flex justify-end gap-2">
            <form action={signIn}>
             <Button type="submit" variant={"outline"}>Sign In</Button>
            </form>
            <form action={signIn}>
             <Button type="submit">Sign Up</Button>
            </form>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
