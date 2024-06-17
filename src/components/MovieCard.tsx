import React from "react";
import { IoPlaySkipForward, IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MediaType, Movie } from "../hooks/useMovies";

interface MovieCardProps {
  movie: Movie;
  mediaType: MediaType;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, mediaType }) => {
  const formatDate = (dateString: string): string | null => {
    if (!dateString) {
      return null;
    }
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
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
          <p className="flex items-center justify-center gap-2  bg-dark-primary/[.8] text-yellow-400 px-1 absolute right-0 bottom-0 ">
            <IoStar />
            <span>{movie.vote_average.toFixed(1)}</span>
          </p>
        </figure>
        <div className="card-body p-1">
          <h1 className="text-nowrap overflow-ellipsis overflow-hidden font-semibold">
            {movie.title}
          </h1>
          <p className="text-xs text-gray-400 font-semibold">
            {formatDate(movie.release_date)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
