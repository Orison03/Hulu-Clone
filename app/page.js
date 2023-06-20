import React from "react";
import Header from "./Header";
import axios from "axios";
import Navbar from "./Navbar";

export default function Home() {
  const TMDB_API_KEY = process.env.API_KEY;
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`
      );
      // console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      {/* header */}
      <Header />

      {/* scrollable navbar */}
      <Navbar genres={fetchMovies}  />

      {/* movies */}
    </main>
  );
}
