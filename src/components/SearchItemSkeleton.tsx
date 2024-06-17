const SearchItemSkeleton = () => {
  return (
    <>
      {[...Array(2)].map((_, index) => (
        <div
          key={index}
          className="shadow-md rounded-lg  flex items-center  gap-2 cursor-pointer animate-pulse"
        >
          <div className="w-[40px] h-[60px] bg-gray-300"></div>
          <div className="p-1 w-full">
            <div className="h-4 bg-gray-300 mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-300 mb-1 w-1/2"></div>
            <div className="h-4 bg-gray-300 w-1/4"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchItemSkeleton;
