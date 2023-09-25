"use client";

import { signOut } from "next-auth/react";

export default function logOut(user: any) {
  return signOut().then(() => user.clear());
}
