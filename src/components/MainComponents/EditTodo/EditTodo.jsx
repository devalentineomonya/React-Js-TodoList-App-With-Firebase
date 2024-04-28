import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import React, { useState } from "react";
import EditFormDialog from "./EditFormDialog";

const EditTodo = ({todoItem}) => {
  const [changed, setChanged] = useState(false)
  return (
    <Dialog>
      <DialogTrigger onClick={()=>setChanged(false)} className="text-sm font-semibold text-black dark:hover:text-black dark:text-white hover:text-white  rounded-full h-6  bg-transparent border hover:bg-green-500  border-green-500  hover:border-transparent w-14">
        Edit
      </DialogTrigger>
      <EditFormDialog todoItem={todoItem} setChanged={setChanged} changed={changed} />
    </Dialog>
  );
};

export default EditTodo;
