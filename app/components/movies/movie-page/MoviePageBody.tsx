"use client";

import Image from "next/image";
import { MainTabs } from "../../Tabs";
import { MovieType } from "@/types/MovieType";

interface ThisType {
  section: string;
  setSection: (val: string) => void;
  movie: MovieType;
}

export default function MoviePageBody({
  section,
  setSection,
  movie,
}: ThisType) {
  //Set tabs
  const tabs = [
    { label: "Cast", value: "cast", desc: movie.actors },
    { label: "About", value: "about", desc: movie.director && movie.genre },
    { label: "Story", value: "story", desc: movie.plot },
  ];
  return (
    <div className="flex flex-col gap-6">
      <Image
        src={movie.poster}
        alt={movie.name}
        width={1500}
        height={1500}
        className="w-full aspect-[5/6] object-cover"
        priority
      />
      <div className="flex flex-col gap-4 items-center px-6">
        <MainTabs tabs={tabs} />
      </div>
    </div>
  );
}
