const apiKey = "7524a60b";
const apiBaseURL = "http://www.omdbapi.com";

export default function createURL(key: string) {
  const url = `${apiBaseURL}/?apikey=${apiKey}&t=${key}`; // Notice the question mark to start the query parameters.
  return url;
}

/** @description Request to api for fetching data */
/** @example createURL("name-of-movie") */
/** @returns A movie with all informations */