import React from "react";
import { IoPlaySkipForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MediaType, Movie } from "../hooks/useMovies";

interface MovieCardProps {
  movie: Movie;
  mediaType: MediaType;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, mediaType }) => {
  // console.log('movie',movie);
  return (
    <Link to={`/${mediaType}/${movie.id}`}>
      <div className="rounded-sm w-full  shadow-xl cursor-pointer">
        <figure className="group relative ">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full"
          />
          <div className="h-full w-full absolute bg-gray-400  top-0 opacity-50 group-hover:flex justify-center items-center hidden transition-all duration-1000">
            <IoPlaySkipForward size={50} />
          </div>
        </figure>
        <div className="card-body"></div>
      </div>
    </Link>
  );
};

export default MovieCard;
