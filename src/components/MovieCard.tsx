import React from "react";
import { Movie } from "../hooks/usePopularMovies";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p className="text-gray-500">{movie.release_date}</p>
        <p className="overflow-hidden overflow-ellipsis max-h-20">
          {movie.overview}
        </p>
        <p className="text-yellow-500">
          Rating: {movie.vote_average} ({movie.vote_count} votes)
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
