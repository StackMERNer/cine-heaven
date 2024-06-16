import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MovieList from "./MovieList";
import UpcomingMovieList from "./UpcomingMovieList";

const Home = () => {
  const { upComingMovieData } = useUpcomingMovies();
  return (
    <div className="px-3 grid grid-cols-[4fr,1fr] gap-4">
      <MovieList />
      <UpcomingMovieList movies={upComingMovieData?.results} />
    </div>
  );
};

export default Home;
