import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { Movie } from "../hooks/useMovies";

const handleDragStart = (e: React.DragEvent) => e.preventDefault();

const TopRatedMovieCarousel: React.FC<{ movies?: Movie[] }> = ({ movies }) => {
  const items = movies?.map((movie) => (
    <Link
      to={`/movie/${movie.id}`}
      key={movie.id}
      className="flex flex-col items-center mx-2 relative"
      onDragStart={handleDragStart}
      role="presentation"
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
        alt={movie.title}
        className="w-full  shadow-md "
      />
      <div className="text-center absolute bottom-0 py-2 right-0 left-0 px-2 flex items-center gap-2 justify-end bg-gradient-to-t from-black to-transparent">
        <h1 className="font-bold text-xs  sm:text-base text-nowrap overflow-hidden  overflow-ellipsis">{movie.title}</h1>
        <p className="flex items-center justify-center gap-2  bg-brand-primary text-white px-1 ">
          <IoStar />
          <span>{movie.vote_average.toFixed(1)}</span>
        </p>
      </div>
    </Link>
  ));

  return (
    <div>
      <h1 className="text-brand sm:text-2xl text-xl font-bold py-1 mb-2 inline-block px-2 capitalize ml-2">Top Rated</h1>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={{
          0: { items: 3 },
          512: { items: 3 },
          1024: { items: 4 },
        }}
        
        autoPlay
        autoPlayInterval={2000}
        infinite
        disableDotsControls
        disableButtonsControls
      />
    </div>
  );
};

export default TopRatedMovieCarousel;
