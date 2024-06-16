import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MovieDetails from "./MovieDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<MovieDetails />} />
    </Routes>
  );
};

export default AppRoutes;
