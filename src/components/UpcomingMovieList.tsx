import { Movie } from "../hooks/usePopularMovies";
const UpcomingMovieList = ({ movies }: { movies?: Movie[] }) => {
  return (
    <div>
      <h1 className="text-brand py-1 mb-3 text-xl font-bold">Upcoming</h1>
      {movies?.map((movie) => (
        <div key={movie.id} className="flex items-center gap-2">
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
  );
};

export default UpcomingMovieList;
