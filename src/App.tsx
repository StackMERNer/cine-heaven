import { useState } from "react";
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import Header from "./components/Header";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="bg-dark-primary text-white py-5">
      <Header
        showSidebar={showSidebar}
        onHamburgerClick={(value) => setShowSidebar(value)}
      />
      <AppRoutes />
    </div>
  );
}

export default App;
