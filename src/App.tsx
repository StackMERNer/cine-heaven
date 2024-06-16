import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-dark-primary text-white">
      <Header />
      <div className="grid grid-cols-[4fr,1fr] px-3">
        <MovieList />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
