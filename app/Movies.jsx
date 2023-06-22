import React from "react";
import Movie from "./Movie";

const Movies = ({ movies }) => {
//   console.log(movies);
  return (
    <div className="p-3 md:px-16 mt-10 sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 scrollbar scrollbar-thumb-gray-200  scrollbar-track-[#75B813]/90">
      {movies.map((movie) => {
        return <Movie key={movie.id} data={movie} />;
      })}
    </div>
  );
};

export default Movies;
