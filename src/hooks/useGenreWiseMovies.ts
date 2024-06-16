import { useEffect, useState } from "react";
import { Movie } from "./usePopularMovies";
import apiClient from "../services/apiClient";

interface GenreWiseMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const useGenreWiseMovies = (genreId?: string) => {
  const [MovieData, setUpcomingMovieData] = useState<GenreWiseMoviesResponse>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get("/discover/movie", {
        params: {
          with_genres: parseInt(genreId ?? "0"),
        },
      })
      .then((res) => {
        setUpcomingMovieData(res.data);
        console.log("res", res);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [genreId]);
  return { MovieData, error, isLoading };
};

export default useGenreWiseMovies;
