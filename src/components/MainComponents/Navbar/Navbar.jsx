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
import { EditProfile } from "../Editprofile/Editprofile";

const Navbar = () => {
  const { loggedIn, user} = useContext(AuthContext);
  const { signOutUser } = useFirebaseAuthentication();

  const handleSignOut = () => {
    signOutUser();
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
                      src={user.photoURL}
                      width={46}
                      height={46}
                      className="rounded-full"
                    />
                    <AvatarFallback className="p-2">{user.displayName.slice(0,2)}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <EditProfile/>
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
