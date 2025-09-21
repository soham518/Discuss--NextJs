import { Button } from "@/components/ui/button";
import { signIn } from "./actions/signin";
import { signOut } from "./actions/signout";
import { auth } from "@/auth";
export default async function Home() {

  const session = await auth();
  
  return (
    
      <div>
        <div>
        <h2>Home Page</h2>
        <form action={signIn}>
          <Button type="submit">Sign In</Button>
        </form>
        <form action={signOut}>
          <Button type="submit">Sign Out</Button>
        </form>
        {session?.user &&<div>{JSON.stringify(session.user)}</div>}
      </div>

      </div>
    
  );
}
