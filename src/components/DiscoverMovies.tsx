import { useLocation, useParams } from "react-router-dom";
import { MediaType, useGenreMovies } from "../hooks/useMovies";
import MovieList from "./MovieList";
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
const DiscoverMovies = () => {
  const { genreId, mediaType } = useParams();
  const query = useQuery();
  const genre = query.get("genre");
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error } =
    useGenreMovies({ genreId: parseInt(genreId ?? "0"), mediaType });

  return (
    <div>
      <MovieList
        mediaType={mediaType as MediaType}
        genreName={genre}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        data={data}
        error={error}
        className="md:order-0"
      />
    </div>
  );
};

export default DiscoverMovies;
