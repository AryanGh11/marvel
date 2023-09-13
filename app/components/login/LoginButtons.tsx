"use client";

import { useState } from "react";
import fetchData from "@/util/fetchData";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { UserType } from "@/types/UserType";
import { handleError, handleMessage, useUserSession } from "@/store";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

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
  fetchData("/get-user", setUsers);

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
      userSession.setEmail(currentUser[0].email);
      userSession.setId(currentUser[0].id);
      userSession.setName(currentUser[0].name);
      userSession.setImage(currentUser[0].image);
      userSession.setPassword(currentUser[0].password);
      userSession.toggleLogin();
      //Go to homepage after 2s
      setTimeout(() => {
        router.push("/");
      }, 2000);
      //Create success message
      message.setMessage(
        `Welcome Back ${userSession.name != null ? userSession.name : ""}`
      );
    }
  };

  return (
    <main className="flex flex-col items-center gap-4 w-full">
      <div className="w-full" onClick={handleLogin}>
        <PrimaryButton
          text="Log in"
          disabled={error.message != null && true}
          timer={2}
        />
      </div>
      <h1 className="text-sm">Or log in with</h1>
      <div className="w-full" onClick={() => signIn()}>
        <SecondaryButton text="Google" icon="google" />
      </div>
    </main>
  );
}