"use client";

import fetchData from "@/pages/api/fetchData";
import { useState } from "react";

export default function randomAvatar() {
  interface ThisType {
    title?: string;
    url?: string;
  }
  const [avatar, setAvatar] = useState<ThisType[]>([]);
  fetchData("/avatar", setAvatar);
  const randIndex = Math.floor(Math.random() * avatar.length);
  if (avatar != undefined && Object.keys(avatar).length > 0) {
    return avatar[randIndex].url;
  }
}
