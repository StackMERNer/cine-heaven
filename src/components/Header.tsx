import { useState } from "react";
import useMovieGenres from "../hooks/useMovieGenres";
import useTvGenres from "../hooks/useTvGenres";
import GenreList from "./GenreList";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { PiTelevisionThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
interface DropdownState {
  movies: boolean;
  tvShows: boolean;
}
interface HeaderProps {
  showSidebar: boolean;
  onHamburgerClick: (value: boolean) => void;
}
const Header = ({ onHamburgerClick, showSidebar }: HeaderProps) => {
  const movieGenres = useMovieGenres();
  const tvGenres = useTvGenres();
  const [dropdownState, setDropdownState] = useState<DropdownState>({
    movies: false,
    tvShows: false,
  });

  const toggleDropdown = (name: keyof DropdownState | "closeAll") => {
    setDropdownState((prevState) => ({
      ...Object.keys(prevState).reduce((acc, key) => {
        acc[key as keyof DropdownState] =
          key === name ? !prevState[key as keyof DropdownState] : false;
        return acc;
      }, {} as DropdownState),
    }));
  };
  return (
    <>
      <nav className="navbar bg-dark-primary text-white flex items-center justify-between py-3 sticky top-0 z-10">
        <div className="">
          <Link
            to="/"
            className="text-xl uppercase font-bold flex items-center gap-2"
          >
            <div className="sm:hidden block">
              {!showSidebar ? (
                <FaBars
                  onClick={() => onHamburgerClick(!showSidebar)}
                  className="cursor-pointer"
                  size={25}
                />
              ) : (
                <ImCross
                  className="cursor-pointer"
                  onClick={() => onHamburgerClick(!showSidebar)}
                />
              )}
            </div>

            <PiTelevisionThin className="" size={30} />
            <h1>
              <span className="text-brand-primary">Cine</span> Heaven
            </h1>
          </Link>
          <div className="menu menu-horizontal px-1 sm:block hidden">
            <div className="flex gap-2 items-center font-semibold">
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
            {dropdownState.movies && (
              <GenreList
                onGenreClick={() => toggleDropdown("closeAll")}
                mediaType="movie"
                genres={movieGenres}
              />
            )}
            {dropdownState.tvShows && (
              <GenreList
                onGenreClick={() => toggleDropdown("closeAll")}
                mediaType="tv"
                genres={tvGenres}
              />
            )}
          </div>
        </div>
        {/* <div className="gap-2">
          <div className="form-control relative ">
            <CiSearch
              className="absolute left-2 translate-y-[50%] font-bold"
              size={25}
            />
            <input
              type="text"
              placeholder="Search movies"
              className="pl-10 input input-bordered w-full sm:w-[50vw] bg-dark-secondary"
            />
          </div>
        </div> */}
        <SearchBar />
      </nav>
      <Sidebar
        onGenreClick={() => onHamburgerClick(false)}
        showSidebar={showSidebar}
      />
    </>
  );
};

export default Header;
