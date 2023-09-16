"use client";

import { useUserSession } from "@/store";
import { useEffect, useState } from "react";
import LoginButtons from "../components/login/LoginButtons";
import LoginInputs from "../components/login/LoginInputs";
import LoginHeader from "../components/login/LoginHeader";
import SignupHeader from "../components/signup/SignupHeader";
import SignupButtons from "../components/signup/SignupButtons";
import SignupInputs from "../components/signup/SignupInputs";

export default function Signup() {
  //Make sure user is logged out
  const userSession = useUserSession();
  useEffect(() => {
    userSession.clear();
  }, []);

  //Inputs value
  const [name, setName] = useState("");
  const [username, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  //Change section
  const [section, setSection] = useState(1);

  return (
    <main className="w-full h-screen px-6 pt-28 pb-10 bg-base-100 flex flex-col items-center justify-between text-neutral">
      <SignupHeader />
      <SignupInputs
        name={name}
        username={username}
        email={email}
        password={password}
        setName={setName}
        setUsername={setAge}
        setEmail={setEmail}
        setPassword={setPassword}
        section={section}
        setSection={setSection}
        otp={otp}
        setOtp={setOtp}
      />
      <SignupButtons
        name={name}
        username={username}
        email={email}
        password={password}
        section={section}
        setSection={setSection}
        otp={otp}
      />
    </main>
  );
}
