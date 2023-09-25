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
      <Image src={user.image!} alt={user.name!} />
      <h1 className="text-xl">{user.name}</h1>

      <button onClick={() => logOut(user)}>Log Out</button>
    </div>
  );
}
