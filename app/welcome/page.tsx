"use client";

import { useUserSession } from "@/store";
import { Style } from "@/util/style";
import { useRouter } from "next/navigation";

export default function Welcome() {
  //Check if user logged in
  const router = useRouter();
  const userSession = useUserSession();
  if (userSession.isLogin) router.push("/");

  return (
    <main className={Style.mainPages}>
      <h1>hello</h1>
      <button onClick={sendPostRequest}>bezan</button>
    </main>
  );
}

async function sendPostRequest() {
  const url = "http://localhost:4000/add-backgrounds";

  const data = {
    value: "as",
    anam: "sdsdsd",
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
  };
  console.log(options);
  try {
    const response = await fetch(url, options);
    const responseData = await response.json();
    console.log("Response:", responseData);
  } catch (error) {
    console.error("Error:", error);
  }
}