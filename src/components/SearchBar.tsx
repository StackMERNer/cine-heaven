import { useState } from "react";
import apiClient from "../services/apiClient";
import { CiSearch } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import SearchItemSkeleton from "./SearchItemSkeleton";
import { Link } from "react-router-dom";

interface SearchResult {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
  media_type: "movie" | "tv";
  release_date?: string;
  first_air_date?: string;
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const handleSearch = () => {
    if (!query) return;
    setMessage("");
    setLoading(true);
    setError(null);

    Promise.all([
      apiClient.get<{ results: SearchResult[] }>("/search/movie", {
        params: { query },
      }),
      apiClient.get<{ results: SearchResult[] }>("/search/tv", {
        params: { query },
      }),
    ])
      .then(([moviesRes, tvRes]) => {
        const movieResults = moviesRes.data.results.map((movie) => ({
          ...movie,
          media_type: "movie" as const,
        }));
        const tvResults = tvRes.data.results.map((tvShow) => ({
          ...tvShow,
          media_type: "tv" as const,
        }));
        const accumulatedResult = [...movieResults, ...tvResults];
        if (!accumulatedResult.length) {
          setMessage(`No results found for "${query}"`);
        }
        setResults(accumulatedResult);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch search results.");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="relative">
      <div className="gap-2">
        <div className="form-control relative ">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for movies or TV shows..."
            className="pl-3 input input-bordered w-full sm:w-[50vw] bg-dark-secondary"
          />
          <CiSearch
            onClick={handleSearch}
            className="absolute right-2 hover:text-brand-primary translate-y-[50%] font-bold cursor-pointer"
            size={25}
          />
        </div>
      </div>
      {(!!results.length || error || message || loading) && (
        <div className="absolute top-[120%] w-full p-3  rounded-lg bg-dark-secondary ">
          <div className="p-2 justify-end flex">
            <ImCross
              onClick={() => {
                setResults([]);
                setError("");
                setMessage("");
              }}
              className="cursor-pointer"
            />
          </div>
          {message && (
            <div className="p-2 text-brand-primary  font-semibold">
              {message}
            </div>
          )}
          {error && (
            <div className="p-2 mt-1 text-brand-primary  font-semibold">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-scroll bg-dark-primary">
            {loading && <SearchItemSkeleton />}
            {results.map((result) => (
              <Link key={result.id} to={`/${result.media_type}/${result.id}`}>
                <div className="shadow-md rounded-lg overflow-hidden flex items-center  gap-2 cursor-pointer group">
                  {result.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                      alt={result.title || result.name}
                      className="w-[40px] object-cover"
                    />
                  ) : (
                    <div className="w-[40px] flex items-center justify-center bg-gray-200">
                      No Image
                    </div>
                  )}
                  <div className="p-1 group-hover:text-brand-primary">
                    <h2 className="font-semibold">
                      {result.title || result.name}
                    </h2>
                    <p className="text-gray-200">
                      {result.release_date || result.first_air_date}
                    </p>
                    <p className="text-sm text-yellow-400">
                      {result.media_type === "movie" ? "Movie" : "TV Show"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
