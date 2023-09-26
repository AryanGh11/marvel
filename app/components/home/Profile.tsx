"use client";

import { useUserSession } from "@/store";
import logOut from "@/util/logOut";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Profile() {
  //Import user session
  const user = useUserSession();
  return (
    <div>
      {user.avatar && (
        <Image
          className="w-36 h-36"
          src={user.avatar!}
          alt={user.name!}
          width={2000}
          height={2000}
        />
      )}
      <h1 className="text-xl">{user.name}</h1>

      <button onClick={() => logOut(user)}>Log Out</button>
    </div>
  );
}
