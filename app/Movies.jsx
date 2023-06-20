import React from "react";
import Movie from "./Movie";

const Movies = ({ movies }) => {
//   console.log(movies);
  return (
    <div className="px md:px-16 mt-10 sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => {
        return <Movie key={movie.id} data={movie} />;
      })}
    </div>
  );
};

export default Movies;
