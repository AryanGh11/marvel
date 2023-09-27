"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default async function logOut(user: any) {
  await signOut();
  user.clear();

  //Push to route
  const route = useRouter();
  route.push("/");
}
