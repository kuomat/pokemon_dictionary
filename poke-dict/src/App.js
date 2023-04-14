import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import PokeRoot from "./components/PokeRoot";
import PokeDetails from "./components/PokeDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokeRoot />} exact/>
        <Route path="/pokemon/" element={<PokeDetails />} exact/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
