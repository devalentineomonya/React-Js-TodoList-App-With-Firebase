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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

import { Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Bio must be at least 5 characters.",
    })
    .max(250, {
      message: "Bio must not be longer than 45 characters.",
    }),

});

export function CreateTodo() {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data) {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Dialog>
      <DialogTrigger className="flex justify-between items-center gap-x-2 border border-gray-700 py-2 px-4 rounded-md">
        <Plus /> Create
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full  flex flex-col space-y-6"
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
                        className=" w-full"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem className="flex justify-start flex-col items-start">
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about yourself"
                        className="resize-none w-full"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
             <div className="flex justify-start  gap-x-3 items-start">
                <FormField
                  control={form.control}
                  name="start"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date</FormLabel>

                      <FormControl>
                        <Input
                          type="datetime-local"
                          placeholder="Tell us a little bit about yourself"
                          className="resize-none full"
                          {...field}
                        />
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
                        <Input
                          type="datetime-local"
                          placeholder="Tell us a little bit about yourself"
                          className="resize-none full"
                          {...field}
                        />
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
    </Dialog>
  );
}
