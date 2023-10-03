"use client";

import { ButtonType } from "@/types/ButtonType";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SecondaryButton({
  text,
  disabled,
  icon,
  timer,
}: ButtonType) {
  //Loading state
  const [loading, setLoading] = useState(false);

  //onClick function
  const handleOnClick = () => {
    setLoading(true);
  };

  if (timer) {
    setTimeout(() => {
      setLoading(false);
    }, timer * 1000);
  }
  return (
    <button
      disabled={disabled}
      onClick={handleOnClick}
      className="btn w-full h-14 bg-transparent border-solid border-primary border-2 hover:border-2 hover:border-primary flex flex-row-reverse items-center text-primary"
    >
      {loading ? (
        <span className="loading loading-ring loading-md"></span>
      ) : (
        [text, icon === "google" ? <FcGoogle className="w-6 h-6" /> : null]
      )}
    </button>
  );
}
