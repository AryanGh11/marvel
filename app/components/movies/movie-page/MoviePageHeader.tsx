"use client";

import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function MoviePageHeader() {
  return (
    <div className="absolute top-0 left-0 p-6 text-neutral w-full">
      <div className="w-8 h-8">
        <Link href={"/movies"}>
          <IoIosArrowForward className="w-8 h-8 rotate-180" />
        </Link>
      </div>
    </div>
  );
}
