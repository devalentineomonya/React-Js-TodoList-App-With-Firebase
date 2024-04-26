import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreateTodo } from "../CreateTodo/CreateTodo";


const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-16 w-full border-b border-gray-300 px-4">
      <div className="flex justify-between items-center w-full max-w-[1400px]">
        <div className="w-11 h-full flex justify-center items-center ">
          <img src={logo}  />
        </div>

        <div className="flex justify-center items-center">
          <SearchBar />
        </div>

        <div className="flex justify-center items-center gap-x-3">
          <CreateTodo/>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                 
                  <AvatarImage src="https://github.com/shadcn.png" width={50} height={50} className="rounded-full" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
