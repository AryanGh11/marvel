"use client";

import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Logo() {
  return <Image priority src={logo} alt="logo" className="h-20 w-auto" />;
}
