import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useMovieGenres = () => {
  const [movieGenres, setMovieGenres] = useState<
    { id: number; name: string }[]
  >([]);

  useEffect(() => {
    apiClient
      .get("/genre/movie/list")
      .then((response) => {
        setMovieGenres(response.data.genres);
      })
      .catch((error) => {
        console.error("Error fetching movie genres:", error);
      });
  }, []);

  return movieGenres;
};

export default useMovieGenres;
