"use client";

import { ButtonType } from "@/types/ButtonType";

export default function SecondaryButton({ text, disabled }: ButtonType) {
  return (
    <button
      disabled={disabled}
      className="btn w-full text-neutral h-14 bg-transparent border-solid border-primary border-2 hover:border-2 hover:border-primary"
    >
      {text}
    </button>
  );
}
