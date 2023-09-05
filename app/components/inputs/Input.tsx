"use client";

import { InputType } from "@/types/InputType";

export default function Input({
  placeholder,
  id,
  type,
  setValue,
  value,
}: InputType) {
  return (
    <input
      className="w-full h-12 px-4 bg-base-200 rounded-xl"
      type={type}
      value={value}
      id={id}
      placeholder={"Enter your " + placeholder}
      onChange={(e) => setValue!(e.target.value)}
    />
  );
}
