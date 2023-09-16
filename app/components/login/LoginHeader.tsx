"use client";

import Logo from "../Logo";

export default function LoginHeader() {
  return (
    <main className="flex flex-col items-center gap-4">
      <Logo />
      <h1 className="text-2xl font-bold">Welcome Back!</h1>
    </main>
  );
}
