"use client";

import { useState } from "react";
import fetchData from "@/util/fetchData";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

interface ThisType {
  email: string;
  password: string;
}

export default function LoginButtons({ email, password }: ThisType) {
  //Check if user existing in database
  const options = {
    body: {
      email: email,
      password: password,
    },
  };
  const [user, setUser] = useState({});

  console.log(user);

  return (
    <main className="flex flex-col items-center gap-4 w-full">
      <div
        className="w-full"
        onClick={() => fetchData("/get-user", setUser, options)}
      >
        <PrimaryButton text="Log in" />
      </div>
      <h1 className="text-sm">Or log in with</h1>
      <SecondaryButton text="Google" icon="google" />
    </main>
  );
}
