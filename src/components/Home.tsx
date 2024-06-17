import { usePopularMovies } from "../hooks/useMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MovieList from "./MovieList";
import TopRatedMovieList from "./TopRatedMovies";
import UpcomingMovieList from "./UpcomingMovieList";

const Home = () => {
  const { upComingMovieData } = useUpcomingMovies();
  const { topRatedMovieData } = useTopRatedMovies();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error } =
    usePopularMovies();
  return (
    <div className="px-3">
      <TopRatedMovieList className="px-2" movies={topRatedMovieData?.results} />
      <div className=" grid md:grid-cols-[4fr,1fr] grid-cols-1 gap-4">
        <UpcomingMovieList
          className="md:order-1"
          movies={upComingMovieData?.results}
        />
        <MovieList
          mediaType="movie"
          genreName="Trending"
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          data={data}
          error={error}
          className="md:order-0"
        />
      </div>
    </div>
  );
};

export default Home;
