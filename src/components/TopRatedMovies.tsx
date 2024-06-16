import clsx from "clsx";
import { Movie } from "../hooks/usePopularMovies";
import { IoStar } from "react-icons/io5";
const TopRatedMovieList = ({
  movies,
  className,
}: {
  movies?: Movie[];
  className?: string;
}) => {
  console.log("top-", movies);
  return (
    <div className={clsx(className)}>
      <h1 className="text-brand py-1 mb-3 text-xl font-bold">Top Rated</h1>
      <div className="flex  flex-row items-center md:overflow-auto overflow-x-scroll px-3">
        {movies?.map((movie) => (
          <div key={movie.id} className="flex items-center gap-2 min-w-[180px]">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="w-[33%] rounded-lg shadow-md mb-4"
            />
            <div>
              <h1>{movie.title}</h1>
              <h1 className="flex items-center gap-2">
                {" "}
                <IoStar />
                <span> {movie.vote_average.toFixed(1)}</span>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovieList;
