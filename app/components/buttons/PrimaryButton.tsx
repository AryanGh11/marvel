"use client";

import { ButtonType } from "@/types/ButtonType";
import { useState } from "react";

export default function PrimaryButton({
  text,
  disabled,
  onClick,
  timer,
}: ButtonType) {
  //Loading state
  const [loading, setLoading] = useState(false);

  //onClick function
  const handleOnClick = () => {
    onClick;
    setLoading(true);
  };

  if (timer) {
    setTimeout(() => {
      setLoading(false);
    }, timer * 1000);
  }
  return (
    <button
      onClick={handleOnClick}
      disabled={loading ? true : disabled}
      className="btn w-full btn-primary text-neutral"
    >
      {loading ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : (
        text
      )}
    </button>
  );
}
