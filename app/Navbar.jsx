import React from "react";

const Navbar = ({ genres, setGenre }) => {
  const genresData = [
    { id: "all", label: "all" },
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
    { id: 36, label: "History" },
    { id: 99, label: "Documentary" },
    { id: 10402, label: "Music" },
  ];

  const cur = genres

  const filterMovies = (genre) => {
    const newMoviesData =
      genre === "all"
        ? genres
        : genres.filter((movie) => movie.genre_ids.includes(genre));

    setGenre(newMoviesData.length <= 2 ? [...cur] : newMoviesData)
  };

  return (
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
  );
};

export default Navbar;
