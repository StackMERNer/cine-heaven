import React from "react";
import { Movie } from "../hooks/usePopularMovies";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="card w-full  shadow-xl">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full"
        />
      </figure>
      <div className="card-body">
      </div>
    </div>
  );
};

export default MovieCard;
