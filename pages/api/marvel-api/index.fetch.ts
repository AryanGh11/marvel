import { useEffect, useState } from "react";
import createURL from "@/pages/api/marvel-api/index.api";
import { allMovies } from "@/util/allMovies";

export default function Fetch() {
  const info = allMovies.map((list) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      const url = createURL(list);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    return data;
  });
  return info;
}

/** @description Fetching full list of movies */
/** @example const data = Fetch(); data.map(....) */
/** @returns An array of movies and their informations */
