"use client";

import { TextButton } from "@/types/TextButtonType";
import Link from "next/link";

export default function TextButton({ title, buttonText, href }: TextButton) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {title && <h1>{title}</h1>}
      <Link className="text-primary hover:text-secondary" href={`/${href}`}>
        {buttonText}
      </Link>
    </div>
  );
}
