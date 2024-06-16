import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import ms from "ms";
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

const fetchPopularMovies = async ({
  pageParam = 1,
}: {
  pageParam: number | unknown;
}): Promise<ApiResponse> => {
  const response = await apiClient.get("/movie/popular", {
    params: { page: pageParam },
  });
  return response.data;
};

export const usePopularMovies = () => {
  return useInfiniteQuery<ApiResponse, Error>({
    queryKey: ["popularMovies"],
    queryFn: ({ pageParam }) => fetchPopularMovies({ pageParam }),
    getNextPageParam: (lastPage: ApiResponse) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
    staleTime: ms("24h"),
    initialPageParam: 1,
  });
};
