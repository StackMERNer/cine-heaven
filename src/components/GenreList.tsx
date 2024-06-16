import React from "react";
import { Link } from "react-router-dom";

interface Genre {
  id: number;
  name: string;
}

interface GenreListProps {
  genres: Genre[];
  className?: string;
  mediaType: "tv" | "movie";
  onGenreClick: () => void;
}

const GenreList: React.FC<GenreListProps> = ({
  genres,
  className,
  onGenreClick,
  mediaType,
}) => {
  return (
    <div
      onClick={onGenreClick}
      className={`absolute z-10 grid grid-cols-3  rounded-lg top-[50px] left-[50px] p-3 bg-dark-primary ${className}`}
    >
      {genres.map((genre) => (
        <Link
          to={`/discover/${mediaType}/${genre.id}?name=${genre.name}`}
          key={genre.id}
          className="p-2 block hover:text-brand-primary cursor-pointer"
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
};

export default GenreList;
