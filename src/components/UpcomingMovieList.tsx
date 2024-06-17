import clsx from "clsx";
import { Movie } from "../hooks/useMovies";

const UpcomingMovieList = ({
  movies,
  className,
}: {
  movies?: Movie[];
  className?: string;
}) => {
  return (
    <div className={clsx(className)}>
      <h1 className="text-brand py-1 mb-3 text-xl font-bold">Upcoming</h1>
      <div className="flex md:flex-col flex-row items-center md:overflow-auto overflow-x-scroll px-3">
        {movies?.map((movie) => (
          <div key={movie.id} className="flex items-center gap-2 min-w-[180px]">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="w-[33%] rounded-lg shadow-md mb-4"
            />
            <div>
              <h1>{movie.title}</h1>
              <h1>votes : {movie.vote_count}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMovieList;
