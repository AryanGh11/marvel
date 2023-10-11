"use client";

import fetchData from "@/pages/api/fetchData";
import { MovieType } from "@/types/MovieType";
import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";
import MovieIcon from "../components/MovieIcon";
import MoviesHeader from "../components/movies/MoviesHeader";

export default function Movies() {
  //Fetch all the movies from database
  const [movies, setMovies] = useState([]);
  fetchData("/movie", setMovies);

  //Filter movies
  const [value, setValue] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  useEffect(() => {
    // Filter movies based on the 'value' input
    const filtered = movies.filter((movie: MovieType) =>
      movie.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [movies, value]);

  return (
    <div className="flex flex-col px-6 pb-24 gap-4 pt-24 text-neutral min-h-screen">
      <MoviesHeader value={value} setValue={setValue} />
      {filteredMovies.length === 0 && <NotFound />}
      {filteredMovies.length != 0 || movies.length != 0 ? (
        <div className="grid gap-3 grid-cols-2 justify-center items-center">
          {filteredMovies.map((movie: MovieType) => (
            <MovieIcon {...movie} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center fixed w-full h-screen top-0 left-0 bg-base-100 z-10">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </div>
  );
}
