import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useTvGenres = () => {
  const [tvGenres, setTvGenres] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    apiClient
      .get("/genre/tv/list")
      .then((response) => {
        setTvGenres(response.data.genres);
      })
      .catch((error) => {
        console.error("Error fetching TV show genres:", error);
      });
  }, []);

  return tvGenres;
};

export default useTvGenres;
