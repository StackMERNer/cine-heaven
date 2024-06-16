import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="bg-dark-primary">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
