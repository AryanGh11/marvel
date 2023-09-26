"use client";

import { useUserSession } from "@/store";
import { UserType } from "@/types/UserType";
import fetchData from "@/pages/api/fetchData";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./components/home/Header";
import Nav from "./components/home/Nav";
import Profile from "./components/home/Profile";

export default function Home() {
  //Check if user not logged in
  const router = useRouter();
  const userSession = useUserSession();
  if (!userSession.isLogin) router.push("/welcome");

  //Get all users from database
  const [users, setUsers] = useState([]);
  fetchData("/user", setUsers);

  useEffect(() => {
    if (userSession.email != null) {
      const currentUser: UserType[] = users.filter(
        (user: UserType) => user.email === userSession.email
      );
      if (currentUser.length != 0) {
        userSession.setName(currentUser[0].name);
        userSession.setAvatar(currentUser[0].avatar);
        userSession.setId(currentUser[0]._id);
      }
    }
  }, [users, userSession.email]);

  //Sections
  const [section, setSection] = useState("home");

  return (
    <main className="w-full text-neutral flex justify-center">
      <Header />
      <Nav section={section} setSection={setSection} />

      {section === "profile" && <Profile />}
    </main>
  );
}
