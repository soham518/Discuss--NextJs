import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="grid grid-cols-3 gap-4 p-3">
      <div className="col-span-2 flex items-center">
        <h1 className="text-xl font-bold m-2">Home Page</h1>
      </div>
      <div className="flex justify-end items-center">
        <Button>New Topic</Button>
      </div>
    </div>
  );
}