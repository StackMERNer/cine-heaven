import useMovieGenres from "../hooks/useMovieGenres";
import useTvGenres from "../hooks/useTvGenres";

const Sidebar = () => {
  const movieGenres = useMovieGenres();
  const tvGenres = useTvGenres();
  return (
    <div className="p-5">
      <div>
        <h1 className="text-xl font-bold  py-1 text-brand">
          Movies
        </h1>
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
