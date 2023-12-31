"use client";

import { useState } from "react";
import fetchData from "@/pages/api/fetchData";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { UserType } from "@/types/UserType";
import { handleError, handleMessage, useUserSession } from "@/store";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TextButton from "../buttons/TextButton";

interface ThisType {
  email: string;
  password: string;
}

export default function LoginButtons({ email, password }: ThisType) {
  //Import errors & message
  const error = handleError();
  const message = handleMessage();

  //import useRouter
  const router = useRouter();

  //user session in storage
  const userSession = useUserSession();

  //Get all users from database
  const [users, setUsers] = useState([]);
  fetchData("/user", setUsers);

  //Check if user existing in database
  const handleLogin = () => {
    const currentUser: UserType[] = users.filter(
      (user: UserType) => user.email === email && user.password === password
    );

    //Set errors
    if (currentUser.length === 0) {
      error.setMessage("Email or password isn't correct");
    } else {
      //Set current user to storage
      userSession.setId(currentUser[0]._id);
      userSession.setName(currentUser[0].name);
      userSession.setUsername(currentUser[0].username);
      userSession.setBio(currentUser[0].bio);
      userSession.setPhone(currentUser[0].phone_number);
      userSession.setAvatar(currentUser[0].avatar);
      userSession.setEmail(currentUser[0].email);
      userSession.toggleLogin(true);

      //Go to homepage after 2s
      setTimeout(() => {
        router.push("/");
      }, 2000);

      //Create success message
      message.setMessage(
        `Welcome Back ${currentUser[0].name != null ? currentUser[0].name : ""}`
      );
    }
  };

  //Handle disable button
  const handleDisable = () => {
    if (error.message != null) {
      return true;
    }
    if (email === "" || password === "") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <main className="flex flex-col items-center gap-4 w-full">
      <div className="w-full" onClick={handleLogin}>
        <PrimaryButton text="Log in" disabled={handleDisable()} timer={3} />
      </div>
      <h1 className="text-sm">Or log in with</h1>
      <div className="w-full" onClick={() => signIn()}>
        <SecondaryButton text="Google" icon="google" />
      </div>

      <TextButton
        title="Don't you have an account?"
        buttonText="Create account"
        href="signup"
      />
    </main>
  );
}
