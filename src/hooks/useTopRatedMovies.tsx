import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { Movie } from "./usePopularMovies";

interface Dates {
  maximum: string;
  minimum: string;
}

interface UpcomingMoviesResponse {
  dates: Dates;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
const useTopRatedMovies = () => {
  const [topRatedMovieData, setTopRatedMovieData] =
    useState<UpcomingMoviesResponse>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get("/movie/top_rated")
      .then((res) => {
        setTopRatedMovieData(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return {  topRatedMovieData, error, isLoading };
};

export default useTopRatedMovies;
