"use client";

import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import Movie from "./Movie";
import Header from "./Header";
import Image from "next/image";

const MoviesBody = ({ moviesList }) => {
  const [nav, setNav] = useState(false);
  const [movies, setMovies] = useState(moviesList);
  const [originalMovies, setOriginalMovies] = useState(moviesList);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const genresData = [
    { id: "all", label: "All" },
    { id: 28, label: "Action" },
    { id: 35, label: "Comedy" },
    { id: 18, label: "Drama" },
    { id: 53, label: "Thriller" },
    { id: 10749, label: "Romance" },
    { id: 878, label: "Science Fiction" },
    { id: 16, label: "Animation" },
    { id: 27, label: "Horror" },
    { id: 80, label: "Crime" },
    { id: 12, label: "Adventure" },
    { id: 14, label: "Fantasy" },
    { id: 10749, label: "Romance" },
    { id: 18, label: "Drama" },
    { id: 28, label: "Action" },
  ];

  const movieModal = (id) => {
    const newMovie = moviesList.find((movie) => movie.id === id);
    setSelectedMovie(newMovie);
    setNav(!nav);
  };

  const filterMovies = (genre) => {
    let newMovies;

    if (genre === "all") {
      newMovies = originalMovies;
    } else {
      newMovies = originalMovies.filter((movie) => {
        return movie.genre_ids.includes(genre);
      });
    }

    setMovies(newMovies);
  };

  return (
    <div>
      {/* header */}
      <Header />
      <nav className="relative flex whitespace-nowrap scrollbar-hide overflow-x-scroll space-x-6 px-4 md:px-16 md:space-x-10">
        {genresData.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => filterMovies(id)}
            className="text-lg hover:scale-125 transition-all duration-100 ease-in-out md:hover:text-[#75B813] focus:text-[#75B813]"
          >
            {label}
          </button>
        ))}
      </nav>
      {/* movies */}
      <div className="p-3 md:px-16 mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-7 scrollbar scrollbar-thumb-gray-200  scrollbar-track-[#75B813]/90">
        {movies.map((movie) => {
          return (
            <div key={movie.id} onClick={() => movieModal(movie.id)}>
              <Movie data={movie} />
            </div>
          );
        })}
      </div>

      {/* modal */}
      {/* overlay */}
      <div
        className={nav ? "w-full h-screen fixed bg-black/60 inset-0 z-[5]" : ""}
        onClick={() => setNav(!nav)}
      ></div>
      {/* pop up */}
      <section
        className={
          nav
            ? "fixed  h-[90%] w-[90%] inset-[5%] bg-[#06202A] rounded-lg  z-10 ease-in duration-500"
            : "fixed top-0 left-[-100%] h-screen w-[75%] md:w-[34%] lg:w-[25%] bg-white z-15 flex flex-col justify-between ease-in duration-500"
        }
      >
        <div className="flex justify-end m-5" onClick={() => setNav(!nav)}>
          <div className="flex flex-col items-center justify-center p-1 rounded-full bg-[#75B813] cursor-pointer hover:bg-white">
            <GrFormClose size={25} />
          </div>
        </div>
        {selectedMovie && (
          <div className="w-[90%] mx-auto md:w-[75%] md:mx-auto md:flex justify-between space-x-4">
            {/* message */}
            <div className="flex-grow px-3">
              <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
                {selectedMovie.title}
              </h2>
              <p className="text-white leading-7">{selectedMovie.overview}</p>
              {/* sub-lists */}
              <ul className="mt-12 flex flex-col space-y-5">
                <li className="text-[#75B813]">
                  <span className="text-white pr-2">-</span> Release Date :{" "}
                  <span>{selectedMovie.release_date}</span>
                </li>
                <li className="text-[#75B813]">
                  <span className="text-white pr-2">-</span> Popularity :{" "}
                  {selectedMovie.popularity}
                </li>
                <li className="text-[#75B813]">
                  <span className="text-white pr-2">-</span> Vote Average :{""}{" "}
                  {selectedMovie.vote_average} likes
                </li>
              </ul>
            </div>
            {/* image */}
            <Image
              className="hidden md:flex object-fit rounded-sm cursor-pointer"
              src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              width={250}
              height={100}
              alt="movie picture"
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default MoviesBody;
