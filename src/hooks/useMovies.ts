import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import ms from "ms";

export type MediaType = "tv" | "movie";
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

const fetchMovies = async ({
  pageParam = 1,
  endpoint,
  params = {},
}: {
  pageParam?: number | unknown;
  endpoint: string;
  params?: object;
}): Promise<ApiResponse> => {
  const response = await apiClient.get(endpoint, {
    params: { page: pageParam, ...params },
  });
  return response.data;
};

export const useMovies = (endpoint: string, params: object = {}) => {
  return useInfiniteQuery<ApiResponse, Error>({
    queryKey: [endpoint, params],
    queryFn: ({ pageParam }) => fetchMovies({ pageParam, endpoint, params }),
    getNextPageParam: (lastPage: ApiResponse) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
    staleTime: ms("24h"),
    initialPageParam: 1,
  });
};

export const usePopularMovies = () => {
  return useMovies("/movie/popular");
};

export const useGenreMovies = ({
  genreId,
  mediaType,
}: {
  genreId: number;
  mediaType?: string;
}) => {
  return useMovies(`/discover/${mediaType ?? "movie"}`, {
    with_genres: genreId,
  });
};
