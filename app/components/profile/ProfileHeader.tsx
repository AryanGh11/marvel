"use client";

import Image from "next/image";
import { useUserSession } from "@/store";
import Link from "next/link";
import { BiSolidCamera } from "react-icons/bi";
import Dropdown from "../dropdown/Dropdown";
import { DropdownType } from "@/types/DropdownType";

interface ThisType {
  setEditProfile: (val: any) => void;
}

export default function ProfileHeader({ setEditProfile }: ThisType) {
  //Import user session
  const user = useUserSession();

  //Menu options
  const menuOptions = [{ text: "Edit name" }, { text: "Sign out" }];

  return (
    <main className="flex bg-base-200 w-full pt-10 pb-8 px-6 text-neutral justify-between">
      <div className="flex items-center gap-2">
        <div className="border-solid border-[1px] border-primary w-16 h-16 p-2 rounded-full flex justify-center items-center">
          <Image
            className="w-full h-full rounded-full"
            src={user.avatar!}
            alt={user.name!}
            width={2000}
            height={2000}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-lg">{user.name}</h1>
          <h1 className="text-sm font-light opacity-60">@{user.username}</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end">
        <Dropdown options={menuOptions} />
        <div
          onClick={() => setEditProfile((prev: boolean) => !prev)}
          className="w-16 h-16 bg-primary rounded-full flex justify-center items-center translate-y-[4rem]"
        >
          <BiSolidCamera className="w-8 h-8" />
        </div>
      </div>
    </main>
  );
}
