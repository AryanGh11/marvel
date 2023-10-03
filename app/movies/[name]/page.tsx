"use client";

import MoviePageBody from "@/app/components/movies/movie-page/MoviePageBody";
import MoviePageHeader from "@/app/components/movies/movie-page/MoviePageHeader";
import fetchData from "@/pages/api/fetchData";
import { MovieType } from "@/types/MovieType";
import { SearchParamTypes } from "@/types/SearchParamsType";
import { useEffect, useState } from "react";

export default function MoviePage({ searchParams }: SearchParamTypes) {
  //Fetch all the movies from database
  const [movies, setMovies] = useState([]);
  fetchData("/movie", setMovies);

  //Filter movies
  const [movie, setMovie] = useState<MovieType>();
  useEffect(() => {
    // Filter movies based on the 'value' input
    const filtered = movies.find(
      (movie: MovieType) => movie.name === searchParams.name
    );
    setMovie(filtered!);
  }, [movies, movie]);
  return (
    <div className="pb-24">
      {movie != undefined ? (
        <>
          <MoviePageHeader />
          <MoviePageBody movie={movie} />
        </>
      ) : (
        <div className="flex justify-center items-center fixed w-full h-screen top-0 left-0 bg-base-100 z-10">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </div>
  );
}
