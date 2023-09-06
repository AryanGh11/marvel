"use client";

import { ButtonType } from "@/types/ButtonType";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SecondaryButton({ text, disabled, icon }: ButtonType) {
  //Loading state
  const [loading, setLoading] = useState(false);

  return (
    <button
      disabled={disabled}
      onClick={() => setLoading(true)}
      className="btn w-full text-neutral h-14 bg-transparent border-solid border-primary border-2 hover:border-2 hover:border-primary flex flex-row-reverse items-center"
    >
      {text}
      {icon === "google" ? <FcGoogle className="w-6 h-6" /> : null}
    </button>
  );
}
