"use client";

import { MovieType } from "@/types/MovieType";
import Image from "next/image";
import Link from "next/link";
import { FaImdb } from "react-icons/fa";

export default function MovieIcon(movie: MovieType) {
  return (
    <Link href={{ pathname: "/movies/name", query: { name: movie.name } }}>
      <div className="w-full h-full p-2 pb-4 rounded-xl flex flex-col gap-3">
        <Image
          src={movie.poster}
          alt={movie.name}
          width={1200}
          height={900}
          className="w-full aspect-[3/4] rounded-lg object-cover"
          onContextMenu={(e) => e.preventDefault()}
        />
        <div className="flex flex-col gap-2 px-2">
          <h1 className="text-sm text-ellipsis whitespace-nowrap overflow-hidden font-bold">
            {movie.name}
          </h1>
          <div className="text-sm text-ellipsis whitespace-nowrap overflow-hidden font-bold flex gap-1">
            <div>
              <FaImdb className="w-5 h-5" />
            </div>
            {movie.imdb_rating}
          </div>
        </div>
      </div>
    </Link>
  );
}
