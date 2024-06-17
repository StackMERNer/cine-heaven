import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../services/apiClient";
import MovieDetailsSkeleton from "./MovieDetailsSkeleton";

interface MovieDetails {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: string[] | null;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const MovieDetails: React.FC = () => {
  const { movieId, mediaType } = useParams<{
    mediaType: string;
    movieId: string;
  }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    apiClient
      .get<MovieDetails>(`/${mediaType}/${movieId}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  }, [movieId, mediaType]);

  if (!movie)
    return (
      <div className="p-4">
        <MovieDetailsSkeleton />
      </div>
    );

  return (
    <section className="p-4 min-h-[100vh]">
      <h1 className="sm:text-3xl text-xl  font-bold mb-2">{movie.title}</h1>
      {movie.tagline && (
        <p className="italic text-gray-200 mb-4">{movie.tagline}</p>
      )}
      <div className="flex flex-col lg:flex-row">
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full lg:w-1/3 rounded-lg shadow-md mb-4 lg:mr-4"
          />
        )}
        <div className="flex-1">
          <p className="mb-4">{movie.overview}</p>
          <p className="mb-2">Released Date: {movie.release_date}</p>
          <p className="mb-2">Runtime: {movie.runtime} minutes</p>
          <p className="mb-2">
            Genres: {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p className="mb-2">Production Companies:</p>
          <ul className="list-disc pl-4 mb-4">
            {movie.production_companies.map((company) => (
              <li key={company.id}>
                {company.name} ({company.origin_country})
              </li>
            ))}
          </ul>
          <p className="mb-2">Production Countries:</p>
          <ul className="list-disc pl-4 mb-4">
            {movie.production_countries.map((country) => (
              <li key={country.iso_3166_1}>{country.name}</li>
            ))}
          </ul>
          <p className="mb-2">Vote Average: {movie.vote_average}</p>
          <p className="mb-4">Vote Count: {movie.vote_count}</p>
          {movie.homepage && (
            <p className="mb-4">
              <a
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Visit Homepage
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
