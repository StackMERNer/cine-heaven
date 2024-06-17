import clsx from "clsx";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import MovieCard from "./MovieCard";
import { InfiniteData } from "@tanstack/react-query";
import { Movie, MediaType } from "../hooks/useMovies";
import MovieCardSkeleton from "./MovieCardSkeleton";
interface MovieListProps {
  mediaType: MediaType;
  genreName: string | null;
  className?: string;
  data?: InfiniteData<{ results: Movie[] }>;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  error?: Error | null;
}
const MovieList = ({
  genreName,
  className,
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  error,
  mediaType,
}: MovieListProps) => {
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={clsx("container mx-auto px-2", className)}>
      <h1 className="text-brand sm:text-2xl text-xl font-bold py-1 mb-2 inline-block px-2 capitalize">
        {genreName}
      </h1>
      <div className="grid md:grid-cols-6 sm:grid-cols-5 xs:grid-cols-4 grid-cols-3 gap-3">
        {data?.pages.map((page) =>
          page.results.map((movie) => (
            <MovieCard mediaType={mediaType} key={movie.id} movie={movie} />
          ))
        )}
        {(isFetchingNextPage || !data?.pages.length) && (
          <>
            {[...new Array(12)].map((_, i) => (
              <MovieCardSkeleton key={i} />
            ))}
          </>
        )}
      </div>
      <div ref={ref} className="h-1 bg-transparent"></div>
    </div>
  );
};

export default MovieList;
