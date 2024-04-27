import React from "react";
import { MessageSquareText, PenIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import FormDialog from "../../CreateTodo/FormDialog";

const TaskCard = ({ task, setActiveTab }) => {
  console.log(task);
  return (
    <Card>
      <CardContent>
        <div
          className="w-full h-full flex flex-col rounded-md py-2 px-1 justify-start dark:bg-slate-950 bg-white active:opacity-70 active:border border-gray-500 cursor-grab active:cursor-grabbing"
          draggable
          onDragStart={() => setActiveTab(task.id)}
          onDragEnd={() => setActiveTab(null)}
        >
          <div className="flex justify-between items-center">
            <div className="text-md font-semibold">
              <p className="text-[1px] font-sans">{task.todoTitle}</p>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              )
            </div>
          </div>
          <div className="container p-0 overflow-hidden text-ellipsis whitespace-wrap h-20">
            <p className="truncate-3 text-[3px] font-sans text-start dark:text-white text-gray-600">
              {task.todoDescription}
            </p>
          </div>
          <div className="flex justify-between mt-1">
            <div className="flex flex-row">
              <MessageSquareText />
              <span>1</span>
            </div>
            <div className="flex gap-x-2 ">
              <Button className="text-sm font-semibold text-black dark:hover:text-black dark:text-white hover:text-white  rounded-full h-6 hover:bg-red-500 border-red-500  bg-transparent border hover:border-transparent w-14">
                Delete
              </Button>
              <Dialog>
                <DialogTrigger className="text-sm font-semibold text-black dark:hover:text-black dark:text-white hover:text-white  rounded-full h-6  bg-transparent border hover:bg-green-500  border-green-500  hover:border-transparent w-14">
                  Edit
                </DialogTrigger>
                <FormDialog />
              </Dialog>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
