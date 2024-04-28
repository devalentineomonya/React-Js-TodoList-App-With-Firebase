import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import EditFormDialog from "./EditFormDialog";

const EditTodo = ({todoItem}) => {
  return (
    <Dialog>
      <DialogTrigger className="text-sm font-semibold text-black dark:hover:text-black dark:text-white hover:text-white  rounded-full h-6  bg-transparent border hover:bg-green-500  border-green-500  hover:border-transparent w-14">
        Edit
      </DialogTrigger>
      <EditFormDialog todoItem={todoItem} />
    </Dialog>
  );
};

export default EditTodo;
