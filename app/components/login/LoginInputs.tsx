"use client";

import Input from "../inputs/Input";

interface ThisType {
  email: string;
  password: string;
  setEmail: (val: string) => void;
  setPassword: (val: string) => void;
}

export default function LoginInputs({
  email,
  password,
  setEmail,
  setPassword,
}: ThisType) {
  return (
    <main className="flex flex-col items-center gap-4 w-full">
      <Input
        id="email"
        placeholder="Email"
        type="text"
        value={email}
        setValue={setEmail}
      />
      <Input
        id="password"
        placeholder="Password"
        type="password"
        value={password}
        setValue={setPassword}
      />
    </main>
  );
}
