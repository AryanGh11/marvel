"use client";

import { useEffect, useState } from "react";
import fetchData from "@/api/fetchData";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { UserType } from "@/types/UserType";
import { handleError, handleMessage, useUserSession } from "@/store";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import postData from "@/api/postData";
import sendEmail from "@/api/sendEmail";
import createOneTimeCode from "@/util/createOneTimeCode";

interface ThisType {
  name: string;
  username: string;
  email: string;
  password: string;
  otp: string;
  section: number;
  setSection: (val: number) => void;
}

export default function SignupButtons({
  name,
  username,
  email,
  password,
  otp,
  section,
  setSection,
}: ThisType) {
  //Posting new user
  const data = {
    name: name,
    username: username,
    email: email,
    password: password,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const [run, setRun] = useState(false);
  const [res, setRes] = useState([]);
  const [fetching, setFetching] = useState(Function);
  useEffect(() => {
    if (run) {
      setFetching(() => postData("/post-user", setRes, options));
      setRun(false);
    }
    fetching;
  }, [run]);

  //Import errors & message
  const error = handleError();
  const message = handleMessage();

  //Import useRouter
  const router = useRouter();

  //User session in storage
  const userSession = useUserSession();

  //Get all users from database
  const [users, setUsers] = useState([]);
  fetchData("/get-user", setUsers);

  //Handle disable button
  const handleDisable = () => {
    if (error.message != null) {
      return true;
    }
    if (
      name === "" ||
      username === "" ||
      email === "" ||
      password === "" ||
      email.includes(`${""}@${"gmail" || "outlook"}.com`) === false
    ) {
      return true;
    }
    if (section == 2 && otp != localStorage.getItem("code")) {
      return true;
    } else return false;
  };

  //Handle continue
  const handleContinue = () => {
    //Change section
    setSection(2);

    //Create one time code for sign up
    const code = String(createOneTimeCode());

    //Storage code in local storage
    localStorage.setItem("code", code);

    //Email code to user
    const subject = "Email verification";
    const text = `Your code: ${code}
    Please don't send your verification code to anyone!`;
    sendEmail(email, subject, text);
  };

  //Handle login functions
  const handleLogin = async () => {
    const currentUser: UserType[] = users.filter(
      (user: UserType) => user.email === email
    );
    //Created successfully
    if (currentUser.length === 0) {
      //Set current user to storage
      userSession.setEmail(email);
      userSession.toggleLogin();

      // Go to homepage after 2s
      setTimeout(() => {
        router.push("/");
      }, 2000);

      //Run fetching function
      setRun(true);

      //Create success message
      message.setMessage(`Welcome ${name}`);
    } else {
      error.setMessage("User already exist, please login!");
    }
  };

  return (
    <main className="flex flex-col items-center gap-4 w-full">
      {section == 1 && (
        <div className="w-full" onClick={handleContinue}>
          <PrimaryButton text="Continue" disabled={handleDisable()} timer={3} />
        </div>
      )}
      {section == 2 && (
        <div className="w-full" onClick={handleLogin}>
          <PrimaryButton text="Sign up" disabled={handleDisable()} timer={3} />
        </div>
      )}
      <h1 className="text-sm">Or sign up with</h1>
      <div className="w-full" onClick={() => signIn()}>
        <SecondaryButton text="Google" icon="google" />
      </div>
    </main>
  );
}
