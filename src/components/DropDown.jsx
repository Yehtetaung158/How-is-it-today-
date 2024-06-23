import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import { RiDeleteBin6Line } from "react-icons/ri";

const DropDown = ({city_name,deletefun}) => {
    const deletehandle=()=>{
        // console.log("I am delete",city_name)
        deletefun(city_name)
    }
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger >
          <TfiLayoutMenuSeparated />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <button onClick={deletehandle} className=" flex items-center gap-2">
            <RiDeleteBin6Line className=" text-red-500"/>
            <p>Delelte</p>
          </button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDown;
