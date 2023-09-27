"use client";

import { useUserSession } from "@/store";
import ProfileHeader from "../components/profile/ProfileHeader";
import { signIn, signOut } from "next-auth/react";
import logOut from "@/util/logOut";

export default function Profile() {
  //Import user session
  const user = useUserSession();

  function handleError() {
    console.log("An error occurred in the console!");
  }
  window.addEventListener("error", handleError);

  return (
    <div className="w-full">
      <ProfileHeader />
      <button onClick={() => logOut(user)}>Log Out</button>
    </div>
  );
}
