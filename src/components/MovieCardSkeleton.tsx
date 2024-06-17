import React from "react";

const MovieCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-sm w-full shadow-xl animate-pulse cursor-pointer">
      <figure className="group relative">
        <div className="w-full h-64 bg-gray-300"></div>
        <div className="h-6 bg-gray-400 mt-2 rounded  absolute  bottom-1 right-1 w-2/4"></div>
      </figure>
    </div>
  );
};

export default MovieCardSkeleton;
