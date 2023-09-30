"use client";

import { OptionButtonType } from "@/types/OptionButtonType";
import { IoIosArrowForward } from "react-icons/io";

export default function OptionButton({ text, description }: OptionButtonType) {
  return (
    <button className="w-full text-neutral flex justify-between items-center">
      <div className="flex flex-col items-start gap-1">
        <h1>{text}</h1>
        <p className="text-sm opacity-60">{description}</p>
      </div>
      <IoIosArrowForward className="w-6 h-6 text-primary" />
    </button>
  );
}
