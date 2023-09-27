"use client";

import { useUserSession } from "@/store";
import logOut from "@/util/logOut";
import ProfileHeader from "../components/profile/ProfileHeader";

export default function Profile() {
  //Import user session
  const user = useUserSession();

  return (
    <div className="w-full">
      <ProfileHeader />
      <button onClick={() => logOut(user)}>Log Out</button>
    </div>
  );
}
