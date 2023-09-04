"use client";

import { ButtonType } from "@/types/ButtonType";

export default function PrimaryButton({ text, disabled }: ButtonType) {
  return <button className="btn w-full btn-primary">{text}</button>;
}
