import Image from 'next/image'
import React from 'react'

const Movie = ({data}) => {
  return (
    <div className="w-full p-5 drop-shadow-md shadow-sm hover:cursor-pointer md:hover:scale-110 hover:transition-all hover:ease-in-out duration-100">
      <Image
        width={300}
        height={100}
        className="object-fit w-full rounded-sm cursor-pointer"
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt="movie image"
      />
      <p className="text-sm py-2 text-[#75B813] font-semibold">{data.title}</p>
      <p className="line-clamp-3">{data.overview}</p>
    </div>
  );
}

export default Movie