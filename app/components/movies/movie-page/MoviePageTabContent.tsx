"use client";

import { MovieType } from "@/types/MovieType";

interface ThisType {
  section: string;
  setSection: (val: string) => void;
  movie: MovieType;
}

export default function MoviePageTabContent({
  section,
  setSection,
  movie,
}: ThisType) {
  //Map about options
  const aboutOptions = [
    { label: "Director: ", text: movie.director },
    { label: "Country: ", text: movie.country },
    { label: "Language: ", text: movie.language },
    { label: "IMDB rating: ", text: movie.imdb_rating },
    { label: "IMDB votes: ", text: movie.imdb_votes },
  ];
  return (
    <div className="text-sm leading-7">
      {section === "cast" && <h1>{movie.actors}</h1>}
      {section === "story" && <h1>{movie.plot}</h1>}
      {section === "about" && (
        <div className="flex flex-col gap-4">
          {aboutOptions.map((option) => (
            <h1>
              <span className="opacity-60">{option.label}</span>
              {option.text}
            </h1>
          ))}
        </div>
      )}
      {section === "download" && <h1>Not ready yet</h1>}
    </div>
  );
}
