import React from "react";

interface Genre {
  id: number;
  name: string;
}

interface GenreListProps {
  genres: Genre[];
}

const GenreList: React.FC<GenreListProps> = ({ genres }) => {
  return (
    <div
      className={`absolute z-10 grid grid-cols-3  rounded-lg top-[50px] left-[50px] p-3 bg-dark-primary`}
    >
      {genres.map((genre) => (
        <a
          key={genre.id}
          className="p-2 block hover:border-b-2 border-b-red-700 cursor-pointer"
        >
          {genre.name}
        </a>
      ))}
    </div>
  );
};

export default GenreList;
