"use client";

import { useUserSession } from "@/store";
import LoginButtons from "../components/login/LoginButtons";
import LoginHeader from "../components/login/LoginHeader";
import LoginInputs from "../components/login/LoginInputs";
import { useEffect, useState } from "react";

export default function Login() {
  //Make sure user is logged out
  const userSession = useUserSession();
  useEffect(() => {
    userSession.clear();
  }, []);
  //Inputs value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="w-full h-screen px-6 pt-28 pb-10 bg-base-100 flex flex-col items-center justify-between text-neutral fixed z-10">
      <LoginHeader />
      <LoginInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginButtons email={email} password={password} />
    </main>
  );
}
