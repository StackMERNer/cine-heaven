import React, { useState } from "react";
import useMovieGenres from "../hooks/useMovieGenres";
import useTvGenres from "../hooks/useTvGenres";
import GenreList from "./GenreList";
interface DropdownState {
  movies: boolean;
  tvShows: boolean;
}
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
const Header: React.FC = () => {
  const movieGenres = useMovieGenres();
  const tvGenres = useTvGenres();
  const [dropdownState, setDropdownState] = useState<DropdownState>({
    movies: false,
    tvShows: false,
  });

  const toggleDropdown = (name: keyof DropdownState) => {
    setDropdownState((prevState) => ({
      ...Object.keys(prevState).reduce((acc, key) => {
        acc[key as keyof DropdownState] =
          key === name ? !prevState[key as keyof DropdownState] : false;
        return acc;
      }, {} as DropdownState),
    }));
  };

  return (
    <nav className="navbar relative bg-dark-primary text-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl uppercase font-bold">Cine Heaven</a>
        <div className="menu menu-horizontal px-1 ">
          <div className="flex gap-2 items-center">
            <button
              className="flex items-center gap-1"
              onClick={() => toggleDropdown("movies")}
            >
              Movies{" "}
              {dropdownState.movies ? <BsChevronUp /> : <BsChevronDown />}
            </button>
            <button
              className="flex items-center gap-1"
              onClick={() => toggleDropdown("tvShows")}
            >
              TV Shows{" "}
              {dropdownState.tvShows ? <BsChevronUp /> : <BsChevronDown />}
            </button>
          </div>
          {dropdownState.movies && <GenreList genres={movieGenres} />}
          {dropdownState.tvShows && <GenreList genres={tvGenres} />}
        </div>
      </div>

      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
