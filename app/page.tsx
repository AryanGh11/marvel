"use client";

import { useUserSession } from "@/store";
import { useRouter } from "next/navigation";

export default function Home() {
  //Check if user logged in
  const router = useRouter();
  const userSession = useUserSession();
  if (!userSession.isLogin) router.push("/welcome");

  return (
    <main className="w-full bg-base-100 text-neutral">
      <h1>hello</h1>
    </main>
  );
}
