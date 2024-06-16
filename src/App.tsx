import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Sidebar from "./components/Sidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="bg-dark-primary text-white">
      <Header
        showSidebar={showSidebar}
        onHamburgerClick={(value) => setShowSidebar(value)}
      />
      <div className="grid sm:grid-cols-[4fr,1fr] px-3">
        <MovieList />
        <Sidebar showSidebar={showSidebar} />
      </div>
    </div>
  );
}

export default App;
