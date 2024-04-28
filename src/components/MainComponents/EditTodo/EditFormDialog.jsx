import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EditTaskCombo } from "./EditTaskCombo";
import { useTaskContext } from "@/Context/TaskContext";
import { toast } from "sonner";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";

const EditFormDialog = ({ todoItem }) => {
  const { taskList, setTaskList } = useTaskContext();

  const FormSchema = z.object({
    title: z.string().min(5, {
      message: "Title must be at least 5 characters.",
    }),
    description: z.string().min(10, {
      message: "Description must be at least 10 characters.",
    }),
    status: z.string().min(4, {
      message: "Please choose the task status",
    }),
    start: z.string().min(10, {
      message: "Start Date should be today or after today.",
    }),
    end: z.string().min(10, {
      message: "End Date should be today or after Start Date.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    if (todoItem) {
      form.setValue("title", todoItem.todoTitle);
      form.setValue("description", todoItem.todoDescription);
      form.setValue("start", todoItem.todoStart);
      form.setValue("end", todoItem.todoEnd);
      form.setValue("status", todoItem.todoStatus);
    }
  }, [todoItem]);

  async function onSubmit(data) {
    const task = {
      userEmail: "valomosh254@gmail.com",
      todoTitle: data.title,
      todoStatus: data.status,
      todoDescription: data.description,
      todoStart: data.start,
      todoEnd: data.end,
    };
    const updateTask = taskList.filter((task) => task.id !== todoItem.id);
    const prevTasks = taskList
    try {
      setTaskList([...updateTask, task]);
      await setDoc(doc(db, "usersTodoList", todoItem.id), {
        ...task,
      });

      toast("Task has been Updated", {
        description: `${data.description} from ${data.start} to ${data.end}`,
        action: {
          label: "Close",
        },
      });
    } catch (error) {
      setTaskList(prevTasks)
      toast("Failed to update task", {
        description: "An error occurred while updating task",
        action: {
          label: "Close",
        },
      });
    }
    form.reset();
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col space-y-6"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex justify-start flex-col items-start">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter the title of this todo item."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="flex justify-start flex-col items-start">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Give a  little bit description about your Todo item"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <EditTaskCombo form={form} todoStatus={todoItem.todoStatus} />
            <div className="flex gap-x-3">
              <FormField
                control={form.control}
                name="start"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input type="datetime-local" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="end"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Date</FormLabel>
                    <FormControl>
                      <Input type="datetime-local" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogHeader>
    </DialogContent>
  );
};

export default EditFormDialog;
