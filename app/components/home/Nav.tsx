"use client";

import { GoHome, GoHomeFill } from "react-icons/go";
import { RiUserFill, RiUserLine } from "react-icons/ri";
import { MdOutlineMovieCreation, MdMovie } from "react-icons/md";

interface ThisType {
  section: string;
  setSection: (val: string) => void;
}

export default function Nav({ section, setSection }: ThisType) {
  return (
    <div className="w-full pb-10 pt-4 px-16 fixed bottom-0 left-0 flex justify-between items-center">
      {/* Home */}
      <div onClick={() => setSection("home")}>
        {section === "home" ? (
          <GoHomeFill className="w-8 h-8 text-primary" />
        ) : (
          <GoHome className="w-8 h-8 opacity-50" />
        )}
      </div>

      {/* Movies */}
      <div onClick={() => setSection("movies")}>
        {section === "movies" ? (
          <MdMovie className="w-8 h-8 text-primary" />
        ) : (
          <MdOutlineMovieCreation className="w-8 h-8 opacity-50" />
        )}
      </div>

      {/* Profile */}
      <div onClick={() => setSection("profile")}>
        {section === "profile" ? (
          <RiUserFill className="w-8 h-8 text-primary" />
        ) : (
          <RiUserLine className="w-8 h-8 opacity-50" />
        )}
      </div>
    </div>
  );
}
