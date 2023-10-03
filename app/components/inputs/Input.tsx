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
      className="input input-bordered text-sm w-full h-12 px-4 bg-base-200 rounded-xl selection:bg-primary selection:text-base-100"
      type={type}
      value={value}
      id={id}
      placeholder={placeholder}
      onChange={(e) => setValue!(e.target.value)}
    />
  );
}
