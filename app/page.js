import React from "react";
import Header from "./Header";
import axios from "axios";
import Navbar from "./Navbar";
import Movies from "./Movies";
const TMDB_API_KEY = process.env.API_KEY;
const fetchMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`
    );
    // console.log(response.data.results);
    const data = response.data.results;

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export default async function Home() {
  const moviesData = await fetchMovies();
  return (
    <main>
      {/* header */}
      <Header />

      {/* scrollable navbar */}
      <Navbar genres={moviesData} />

      {/* movies */}
      <Movies movies={moviesData} />
    </main>
  );
}
