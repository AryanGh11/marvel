"use client";

import { GoHome, GoHomeFill } from "react-icons/go";
import { RiUserFill, RiUserLine } from "react-icons/ri";
import { MdOutlineMovieCreation, MdMovie } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  //Check current page
  const path = usePathname();

  return (
    <div className="w-full pb-10 pt-4 px-16 fixed bottom-0 left-0 flex justify-between items-center bg-base-100 z-10">
      {/* Home */}
      <Link href={"/"}>
        {path === "/" ? (
          <GoHomeFill className="w-8 h-8 text-primary" />
        ) : (
          <GoHome className="w-8 h-8 opacity-50" />
        )}
      </Link>

      {/* Movies */}
      <Link href={"/movies"}>
        {path === "/movies" ? (
          <MdMovie className="w-8 h-8 text-primary" />
        ) : (
          <MdOutlineMovieCreation className="w-8 h-8 opacity-50" />
        )}
      </Link>

      {/* Profile */}
      <Link href={"/profile"}>
        {path === "/profile" ? (
          <RiUserFill className="w-8 h-8 text-primary" />
        ) : (
          <RiUserLine className="w-8 h-8 opacity-50" />
        )}
      </Link>
    </div>
  );
}
