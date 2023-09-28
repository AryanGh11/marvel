"use client";

import { useUserSession } from "@/store";
import ProfileHeader from "../components/profile/ProfileHeader";
import { signIn, signOut } from "next-auth/react";
import logOut from "@/util/logOut";
import { useState } from "react";
import EditAvatar from "../components/profile/EditAvatar";

export default function Profile() {

  //Set edit avatar
  const [editProfile, setEditProfile] = useState(false);

  return (
    <div className="w-full">
      <ProfileHeader setEditProfile={setEditProfile} />
      <EditAvatar editProfile={editProfile} />
    </div>
  );
}
