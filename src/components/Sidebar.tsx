import clsx from "clsx";
import useMovieGenres from "../hooks/useMovieGenres";
import useTvGenres from "../hooks/useTvGenres";

interface SidebarProps {
  showSidebar: boolean;
}
const Sidebar = ({ showSidebar }: SidebarProps) => {
  const movieGenres = useMovieGenres();
  const tvGenres = useTvGenres();
  return (
    <div
      className={clsx("p-5 sm:block", {
        "sm:relative sm:h-auto sm:max-h-max fixed left-0 top-12 bg-dark-primary overflow-y-scroll p-4 max-h-[90vh] grid grid-cols-2":
          showSidebar,
      })}
    >
      <div>
        <h1 className="text-xl font-bold  py-1 text-brand">Movies</h1>
        <div className="flex flex-col">
          {movieGenres.map((genre) => (
            <a
              key={genre.id}
              className="p-2 block hover:text-brand-primary cursor-pointer"
            >
              {genre.name}
            </a>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold border-l-2 border-brand-primary px-2 bg-brand-primary/[.1] py-1">
          Tv Shows
        </h1>
        <div className="flex flex-col">
          {tvGenres.map((genre) => (
            <a
              key={genre.id}
              className="p-2 block hover:text-brand-primary cursor-pointer"
            >
              {genre.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
