import { useEffect, useState } from "react";
import APIClient from "../services/apiClient";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const usePopularMovies = (page = 1) => {
  const [popularMoviesResponse, setPopularMoviesResponse] =
    useState<ApiResponse>();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiClient = new APIClient<ApiResponse>(
      `/movie/popular?page=${page}`
    );
    apiClient
      .get()
      .then((res) => setPopularMoviesResponse(res))
      .catch((err) => {
        console.log(err);
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  }, [page]);

  return {
    popularMoviesResponse,
    isLoading,
    error,
  };
};

export default usePopularMovies;
