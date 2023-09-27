"use client";

import { useUserSession } from "@/store";
import { UserType } from "@/types/UserType";
import fetchData from "@/pages/api/fetchData";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import logOut from "@/util/logOut";
import { useRouter } from "next/navigation";

export default function GoogleLogin({ user }: Session) {
  //Import user session from storage
  const userSession = useUserSession();

  useEffect(() => {
    //Check if user not logged in
    if (user != undefined) {
      userSession.toggleLogin(true);
      userSession.setEmail(user.email!);
    }
    if (currentUser.length === 1) {
      userSession.setId(currentUser[0]._id);
      userSession.setName(currentUser[0].name);
      userSession.setUsername(currentUser[0].username);
      userSession.setBio(currentUser[0].bio);
      userSession.setPhone(currentUser[0].phone_number);
      userSession.setAvatar(currentUser[0].avatar);
    }
  }, [
    user,
    userSession.email,
    userSession.isLogin,
    userSession.name,
    userSession.username,
    userSession.avatar,
    userSession.phone_number,
    userSession.bio,
  ]);

  //Import router from next-navigation
  const router = useRouter();

  //Get all users from database
  const [users, setUsers] = useState([]);
  fetchData("/user", setUsers);

  //Find current user from database
  const currentUser: UserType[] = users.filter(
    (value: UserType) => value.email === user?.email
  );

  console.log(currentUser);
  //Remove OTP code from storage
  localStorage.removeItem("code");

  return null;
}
