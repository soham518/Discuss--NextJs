import { Input } from "./ui/input";
import AuthHeader from "./auth-header";
const HeaderPage = async () => {
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
         <AuthHeader></AuthHeader>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
