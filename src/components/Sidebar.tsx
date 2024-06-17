import clsx from "clsx";
import useMovieGenres from "../hooks/useMovieGenres";
import useTvGenres from "../hooks/useTvGenres";
import { Link } from "react-router-dom";

interface SidebarProps {
  showSidebar: boolean;
  onGenreClick: () => void;
}
const Sidebar = ({ showSidebar, onGenreClick }: SidebarProps) => {
  const movieGenres = useMovieGenres();
  const tvGenres = useTvGenres();
  return (
    <div
      className={clsx(
        "p-5 fixed left-0 top-14 z-10 bg-dark-primary   overflow-y-scroll max-h-[90vh]",
        {
          "grid grid-cols-2": showSidebar,
        },
        {
          hidden: !showSidebar,
        }
      )}
    >
      <div>
        <h1 className="text-xl font-bold  py-1 text-brand">Movies</h1>
        <div className="flex flex-col">
          {movieGenres.map((genre) => (
            <Link
              onClick={onGenreClick}
              to={`/discover/movie/${genre.id}?genre=${genre.name}`}
              key={genre.id}
              className="p-2 block hover:text-brand-primary cursor-pointer"
            >
              {genre.name}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold border-l-2 border-brand-primary px-2 bg-brand-primary/[.1] py-1">
          Tv Shows
        </h1>
        <div className="flex flex-col">
          {tvGenres.map((genre) => (
            <Link
              onClick={onGenreClick}
              to={`/discover/tv/${genre.id}?genre=${genre.name}`}
              key={genre.id}
              className="p-2 block hover:text-brand-primary cursor-pointer"
            >
              {genre.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
