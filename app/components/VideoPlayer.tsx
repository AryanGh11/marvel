"use client";

import { MovieType } from "@/types/MovieType";
import Image from "next/image";
import ReactPlayer from "react-player";

interface ThisType {
  playing: boolean;
  setPlaying: (val: boolean) => void;
  movie: MovieType;
}

export default function VideoPlayer({ playing, setPlaying, movie }: ThisType) {
  return (
    <>
      {movie.trailer ? (
        !playing ? (
          <Image
            src={movie.poster}
            alt={movie.name}
            width={1500}
            height={1500}
            className="w-full object-cover aspect-[5/6]"
            priority
            onClick={() => setPlaying(true)}
          />
        ) : (
          <ReactPlayer
            width={"100%"}
            url={movie.trailer}
            playing={true}
            height={"100%"}
            style={{
              objectFit: "cover",
              aspectRatio: 5 / 6,
            }}
          />
        )
      ) : (
        <Image
          src={movie.poster}
          alt={movie.name}
          width={1500}
          height={1500}
          className="w-full object-cover aspect-[5/6]"
          priority
          onClick={() => setPlaying(true)}
        />
      )}
    </>
  );
}
