import React, { useEffect } from "react";
import { usePopularMovies } from "../hooks/usePopularMovies";
import MovieCard from "./MovieCard";
import { useInView } from "react-intersection-observer";

const MovieList: React.FC = () => {
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
    <div className="container mx-auto px-2">
      <h1 className="text-brand text-2xl font-bold py-3 mb-2 inline-block px-2">Popular Movies</h1>
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
