"use client";

import { useUserSession } from "@/store";
import { UserType } from "@/types/UserType";
import fetchData from "@/pages/api/fetchData";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  //Check if user not logged in
  const router = useRouter();
  const userSession = useUserSession();
  if (!userSession.isLogin) router.push("/welcome");

  //Get all users from database
  const [users, setUsers] = useState([]);
  fetchData("/get-user", setUsers);

  useEffect(() => {
    if (userSession.email != null) {
      const currentUser: UserType[] = users.filter(
        (user: UserType) => user.email === userSession.email
      );
      if (currentUser.length != 0) {
        userSession.setName(currentUser[0].name);
        userSession.setImage(currentUser[0].image);
        userSession.setId(currentUser[0].id);
      }
    }
  }, [users, userSession.email]);

  return (
    <main className="w-full text-neutral flex justify-center">
      <h1 className="text-4xl font-bold">Hi there!</h1>
    </main>
  );
}
