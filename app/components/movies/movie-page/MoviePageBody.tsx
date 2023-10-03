"use client";

import Image from "next/image";
import { MainTabs } from "../../Tabs";
import { MovieType } from "@/types/MovieType";
import { useState } from "react";
import MoviePageTabContent from "./MoviePageTabContent";
import ReactPlayer from "react-player";
import VideoPlayer from "../../VideoPlayer";

interface ThisType {
  movie: MovieType;
}

export default function MoviePageBody({ movie }: ThisType) {
  //Set tumbnail and trailer video
  const [playing, setPlaying] = useState(false);

  //Set section for tabs
  const [section, setSection] = useState("cast");
  return (
    <div className="flex flex-col gap-6 text-neutral">
      <div className="aspect-[5/6]">
        <VideoPlayer movie={movie} playing={playing} setPlaying={setPlaying} />
      </div>
      <div className="flex flex-col gap-8 items-start px-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold">{movie.name}</h1>
          <div className="flex gap-6">
            <h1 className="text-xs opacity-60 font-semibold">{movie.year}</h1>
            <h1 className="text-xs opacity-60 font-semibold">{movie.genre}</h1>
            <h1 className="text-xs opacity-60 font-semibold">{movie.time}</h1>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <MainTabs section={section} setSection={setSection} />
          <MoviePageTabContent
            movie={movie}
            section={section}
            setSection={setSection}
          />
        </div>
      </div>
    </div>
  );
}
