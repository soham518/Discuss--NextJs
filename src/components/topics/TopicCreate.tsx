import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { createTopic } from "@/actions/createTopic";
import { useActionState } from "react";
export const TopicCreate = () => {
 const [formState, action] = useActionState(createTopic,{message:""})

  return (
    <Dialog>
      
        <DialogTrigger asChild>
          <Button variant={"outline"}>New Topic</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form action={createTopic}>
            <DialogHeader>
              <DialogTitle>Add Topic</DialogTitle>
              <DialogDescription>
                Add details to your new topic
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="discription-1">Discription</Label>
                <Textarea id="discription" name="discription" />
              </div>
            </div>
            <DialogFooter className="pt-3">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
  );
};
