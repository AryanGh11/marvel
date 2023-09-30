"use client";

import ProfileHeader from "../components/profile/ProfileHeader";
import { useState } from "react";
import EditAvatar from "../components/profile/EditAvatar";
import ProfileAccount from "../components/profile/ProfileAccount";

export default function Profile() {
  //Set edit avatar
  const [editProfile, setEditProfile] = useState(false);

  return (
    <div className="w-full">
      <ProfileHeader setEditProfile={setEditProfile} />
      <EditAvatar editProfile={editProfile} />
      <ProfileAccount />
    </div>
  );
}
