"use client";

import { useState } from "react";
import fetchData from "@/util/fetchData";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { UserType } from "@/types/UserType";
import { handleError } from "@/store";
import { signIn, signOut } from "next-auth/react";

interface ThisType {
  email: string;
  password: string;
}

export default function LoginButtons({ email, password }: ThisType) {
  //Import errors
  const error = handleError();

  //Check if user existing in database
  const options = {
    body: {
      email: "mahdi.gholami875@gmail.com",
      password: "aryangh11",
    },
  };

  //Get all users from database
  const [users, setUsers] = useState([]);
  fetchData("/get-user", setUsers);

  //Check if user existing in database
  const handleLogin = () => {
    const currentUser = users.filter(
      (user: UserType) => user.email === email && user.password === password
    );

    //Set errors
    if (currentUser.length === 0) {
      error.setMessage("Email or password isn't correct");
    }
  };

  return (
    <main className="flex flex-col items-center gap-4 w-full">
      <div className="w-full" onClick={handleLogin}>
        <PrimaryButton
          text="Log in"
          disabled={error.message != null && true}
          timer={1}
        />
      </div>
      <h1 className="text-sm">Or log in with</h1>
      <div className="w-full" onClick={() => signIn()}>
        <SecondaryButton text="Google" icon="google" />
      </div>
    </main>
  );
}
