import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MovieList from "./MovieList";
import TopRatedMovieList from "./TopRatedMovies";
import UpcomingMovieList from "./UpcomingMovieList";

const Home = () => {
  const { upComingMovieData } = useUpcomingMovies();
  const { topRatedMovieData } = useTopRatedMovies();
  return (
    <div className="px-3">
      <TopRatedMovieList className="px-2" movies={topRatedMovieData?.results} />
      <div className=" grid md:grid-cols-[4fr,1fr] grid-cols-1 gap-4">
        <UpcomingMovieList
          className="md:order-1"
          movies={upComingMovieData?.results}
        />
        <MovieList className="md:order-0" />
      </div>
    </div>
  );
};

export default Home;
