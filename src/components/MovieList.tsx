import React, { useEffect, useState } from "react";

// Assume MovieCard component is created separately
import usePopularMovies, { Movie } from "../hooks/usePopularMovies";
import MovieCard from "./MovieCard";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1); // Track the current page of movies
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const { popularMoviesResponse, isLoading, error } = usePopularMovies(page);
  useEffect(() => {
    if (popularMoviesResponse?.results) {
      setMovies(popularMoviesResponse.results);
    }
  }, [popularMoviesResponse]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // User has scrolled to the bottom
      //   fetchMoreMovies();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //   const fetchMoreMovies = async () => {
  //     if (isFetching) return;
  //     setIsFetching(true);
  //     try {
  //       const nextPage = page + 1;
  //       const apiClient = new APIClient<ApiResponse>(
  //         `/movie/popular?page=${nextPage}`
  //       );
  //       const newMovies = await apiClient.get();
  //       setMovies((prevMovies) => [...prevMovies, ...newMovies.results]);
  //       setPage(nextPage);
  //     } catch (error) {
  //       console.error("Error fetching more movies:", error);
  //     } finally {
  //       setIsFetching(false);
  //     }
  //   };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {isFetching && <div>Loading more movies...</div>}
    </div>
  );
};

export default MovieList;
