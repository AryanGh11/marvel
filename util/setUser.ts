"use client";

import { useUserSession } from "@/store";
import { UserType } from "@/types/UserType";

export default function setUser(user: UserType) {
  const currentUser = useUserSession();
  return
}
