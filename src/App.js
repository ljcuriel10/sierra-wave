import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import NavWithCenteredSearch from "./components/navigation/NavWithCenteredSearch";


function App() {
  return (
    <div className="App">
      <NavWithCenteredSearch />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
