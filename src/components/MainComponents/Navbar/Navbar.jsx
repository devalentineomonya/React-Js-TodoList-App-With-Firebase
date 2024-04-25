import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-16 w-full border-b border-gray-300 px-4">
      <div className="flex justify-between items-center w-full max-w-[1400px]">
        <div className="w-11 h-full flex justify-center items-center ">Logo</div>

      <div className="flex justify-center items-center">
        <SearchBar />
      </div>
      <div className="flex justify-center items-center">
        <Avatar>
          <AvatarImage />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
