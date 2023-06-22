import React from "react";
import axios from "axios";
import MoviesBody from "./MoviesBody";


const TMDB_API_KEY = process.env.API_KEY;
const fetchMovies = async (page) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&page=${page}`
    );
    const data = response.data.results;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

fetchMovies()
export default async function Home() {
  const moviesData1 = await fetchMovies(1);
  const moviesData2 = await fetchMovies(2);
  const moviesData3 = await fetchMovies(3);
  const moviesData4 = await fetchMovies(4);

  const allMovies = [
    ...moviesData1,
    ...moviesData2,
    ...moviesData3,
    ...moviesData4,
  ];
  return (
    <main className="scrollbar scrollbar-thumb-gray-200  scrollbar-track-[#75B813]/90">
          <MoviesBody moviesList={allMovies} />
    </main>
  );
}
