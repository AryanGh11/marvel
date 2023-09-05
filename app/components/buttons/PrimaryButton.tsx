"use client";

import { ButtonType } from "@/types/ButtonType";
import { useState } from "react";

export default function PrimaryButton({ text, disabled }: ButtonType) {
  //Loading state
  const [loading, setLoading] = useState(false);
  return (
    <button
      onClick={() => setLoading(true)}
      disabled={loading ? true : disabled}
      className="btn w-full btn-primary text-neutral"
    >
      {loading ? "Loading..." : text}
    </button>
  );
}
