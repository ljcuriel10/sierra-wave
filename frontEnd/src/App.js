import { Container } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import EmptyCart from "./components/cart/EmptyCart";
import Footer from "./components/home/Footer";
import Home from "./components/home/Home";
import NavWithCenteredSearch from "./components/navigation/NavWithCenteredSearch";


function App() {
  return (
    <div className="App">
    <Container>
        <NavWithCenteredSearch />
    </Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emptyCart" element={<EmptyCart />} />
        </Routes>
        <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
