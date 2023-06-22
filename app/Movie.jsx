import Image from 'next/image'
import React from 'react'

const Movie = ({data}) => {
  return (
    <div className="w-full p-3 drop-shadow-md shadow-sm hover:cursor-pointer md:hover:scale-105 hover:transition-all hover:ease-in-out duration-100 bg-[#75B813]/70 rounded-sm my-5 md:my-0 hover:bg-[#75B813]/90">
      <Image
        width={150}
        height={10}
        className="object-fit w-full rounded-sm cursor-pointer"
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt="movie image"
      />
      <div className="flex space-x-2 items-center pt-5">
        <p className="text-xs md:text-base py-2 text-white font-semibold flex-grow">
          {data.title}
        </p>
        <p className="text-xs md:text-base bg-black md:px-3 md:py-2  text-yellow-400 font-semibold h-12 w-14 flex flex-col items-center justify-center mr-2 rounded-sm">
          {data.vote_average}
        </p>
      </div>
    </div>
  );
}

export default Movie