"use client";

import { DropdownType } from "@/types/DropdownType";
import { BiDotsVerticalRounded } from "react-icons/bi";

export default function Dropdown({ options }: DropdownType) {
  return (
    <div className="dropdown dropdown-end w-4 h-4 flex justify-center">
      <label tabIndex={0} className="btn bg-transparent m-1">
        <BiDotsVerticalRounded className="w-6 h-6" />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-48"
      >
        {options.map((option) => (
          <li>
            <a onClick={option.handleFunction} className="hover:bg-base-200">
              {option.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
