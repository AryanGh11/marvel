"use client";

import { useUserSession } from "@/store";
import { Style } from "@/util/style";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Welcome() {
  const [res, setRes] = useState("");
  //Check if user logged in
  const router = useRouter();
  const userSession = useUserSession();
  if (userSession.isLogin) router.push("/");

  async function sendPostRequest() {
    const url = "https://mahdirafiei.com/add-backgrounds";

    const data = {
      name: "bg-endgame",
      url: "sadasd",
    };

    const options = {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
      console.log("Response:", responseData);
      setRes(`Response: ${responseData.message}`);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <main className={Style.mainPages}>
      <h1>{res}</h1>
      <button onClick={sendPostRequest}>bezan</button>
    </main>
  );
}
