import React from "react";

const MovieDetailsSkeleton: React.FC = () => {
  return (
    <section className="p-4 min-h-[100vh] animate-pulse">
      <div className="sm:text-3xl text-xl font-bold mb-2 bg-gray-300 h-8 w-3/4 rounded"></div>
      <div className="italic text-gray-300 mb-4 bg-gray-300 h-6 w-1/2 rounded"></div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 rounded-lg shadow-md mb-4 lg:mr-4 bg-gray-300 h-96"></div>
        <div className="flex-1">
          <div className="mb-4 bg-gray-300 h-20 rounded"></div>
          <div className="mb-2 bg-gray-300 h-6 w-1/4 rounded"></div>
          <div className="mb-2 bg-gray-300 h-6 w-1/4 rounded"></div>
          <div className="mb-2 bg-gray-300 h-6 w-1/2 rounded"></div>
          <div className="mb-2 bg-gray-300 h-6 w-1/3 rounded"></div>
          <ul className="list-disc pl-4 mb-4">
            <li className="bg-gray-300 h-6 w-full mb-2 rounded"></li>
            <li className="bg-gray-300 h-6 w-full mb-2 rounded"></li>
            <li className="bg-gray-300 h-6 w-full mb-2 rounded"></li>
          </ul>
          <div className="mb-2 bg-gray-300 h-6 w-1/3 rounded"></div>
          <ul className="list-disc pl-4 mb-4">
            <li className="bg-gray-300 h-6 w-full mb-2 rounded"></li>
            <li className="bg-gray-300 h-6 w-full mb-2 rounded"></li>
            <li className="bg-gray-300 h-6 w-full mb-2 rounded"></li>
          </ul>
          <div className="mb-2 bg-gray-300 h-6 w-1/4 rounded"></div>
          <div className="mb-4 bg-gray-300 h-6 w-1/4 rounded"></div>
          <div className="mb-4 bg-gray-300 h-6 w-1/4 rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsSkeleton;
