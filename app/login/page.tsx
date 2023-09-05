"use client";

import Logo from "../components/Logo";

export default function Login() {
  return (
    <main className="w-full h-screen px-6 pt-28 pb-10 bg-base-100 flex flex-col items-center justify-between text-neutral">
      <div className="flex flex-col items-center gap-4">
        <Logo />
        <h1 className="text-2xl font-bold">Who are you?</h1>
      </div>
      <input
        placeholder="Enter your name"
        className="w-full h-12 px-4 bg-base-200 rounded-xl"
      />
    </main>
  );
}
