import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import DiscoverMovies from "./DiscoverMovies";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:mediaType/:movieId" element={<MovieDetails />} />
      <Route
        path="/discover/:mediaType/:genreId"
        element={<DiscoverMovies />}
      />
    </Routes>
  );
};

export default AppRoutes;
