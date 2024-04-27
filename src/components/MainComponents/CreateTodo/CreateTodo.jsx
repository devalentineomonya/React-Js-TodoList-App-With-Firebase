import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { Plus } from "lucide-react";
import React from "react";
import FormDialog from "./FormDialog";

const CreateTodo = () => {
  return (
    <Dialog>
      <DialogTrigger className="flex justify-between items-center gap-x-2 border border-gray-700 py-2 px-4 rounded-md">
        <Plus /> Create
      </DialogTrigger>
      <FormDialog/>
    </Dialog>
  );
};

export default CreateTodo;
