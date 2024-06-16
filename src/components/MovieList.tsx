import clsx from "clsx";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import MovieCard from "./MovieCard";

const MovieList = ({ className }: { className?: string }) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error } =
    usePopularMovies();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={clsx("container mx-auto px-2", className)}>
      <h1 className="text-brand sm:text-2xl text-xl font-bold py-1 mb-2 inline-block px-2">
        Trending
      </h1>
      <div className="grid md:grid-cols-6 sm:grid-cols-5 xs:grid-cols-4 grid-cols-3 gap-3">
        {data?.pages.map((page) =>
          page.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
      <div ref={ref} className="h-1 bg-transparent"></div>
      {isFetchingNextPage && (
        <div className="text-center my-4">Loading more movies...</div>
      )}
    </div>
  );
};

export default MovieList;
