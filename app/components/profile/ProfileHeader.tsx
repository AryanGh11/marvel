"use client";

import Image from "next/image";
import { useUserSession } from "@/store";
import Link from "next/link";
import { FiEdit3 } from "react-icons/fi";

export default function ProfileHeader() {
  //Import user session
  const user = useUserSession();

  return (
    <main className="flex bg-base-200 w-full pt-10 pb-8 px-6 text-neutral justify-between">
      <div className="flex items-center gap-2">
        <div className="border-solid border-[1px] border-primary w-12 h-12 p-2 rounded-full flex justify-center items-center">
          <Image
            className="w-8 h-8 rounded-full"
            src={user.avatar!}
            alt={user.name!}
            width={2000}
            height={2000}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">{user.name}</h1>
          <h1 className="text-xs font-normal">@{user.username}</h1>
        </div>
      </div>
      <Link href={"/profile/edit-profile"}>
        <div className="w-11 h-11 bg-primary rounded-full flex justify-center items-center translate-y-14">
          <FiEdit3 className="w-5 h-5" />
        </div>
      </Link>
    </main>
  );
}
