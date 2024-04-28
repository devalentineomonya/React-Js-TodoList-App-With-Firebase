import React, { useContext } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CreateTodo from "../CreateTodo/CreateTodo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import AuthContext from "@/Context/AuthContext";
import useFirebaseAuthentication from "@/Auth/Signout";

const Navbar = () => {
  const { loggedIn } = useContext(AuthContext);
  const { signOutAnonymousUser } = useFirebaseAuthentication();

  const handleSignOut = () => {
    signOutAnonymousUser();
  };

  return (
    <div className="flex justify-center items-center h-16 w-full border-b border-gray-300 px-4">
      <div className="flex justify-between items-center w-full max-w-[1400px]">
        <div className="w-11 h-full flex justify-center items-center ">
          <img src={logo} />
        </div>
        {loggedIn ? (
          <div className="flex justify-center items-center">
            <SearchBar />
          </div>
        ) : null}

        <div className="flex justify-center items-center gap-x-3">
          {loggedIn ? <CreateTodo /> : null}

          <ModeToggle />
          <div>
            {loggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <AvatarFallback className="p-2">CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem onClick={()=>handleSignOut()}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
