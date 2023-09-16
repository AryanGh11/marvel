"use client";

import { useUserSession } from "@/store";
import { UserType } from "@/types/UserType";
import fetchData from "@/api/fetchData";
import { Session } from "next-auth";
import { useEffect, useState } from "react";

export default function GoogleLogin({ user }: Session) {
  useEffect(() => {
    if (user != undefined) {
      userSession.setName(user.name!);
      userSession.setEmail(user.email!);
      userSession.setImage(user.image!);
      if (userSession.isLogin == false) {
        userSession.toggleLogin();
      }
    }
  }, []);
  //Import user session from storage
  const userSession = useUserSession();

  //Get all users from database
  const [users, setUsers] = useState([]);
  fetchData("/get-user", setUsers);

  //Find current user from database
  const currentUser: UserType[] = users.filter(
    (value: UserType) => value.email === user?.email
  );

  //Remove OTP code from storage
  localStorage.removeItem("code")

  return null;
}

//login and signin work!
