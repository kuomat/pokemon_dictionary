import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import PokeRoot from "./components/PokeRoot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokeRoot />}/>
        {/* <Route path="/" */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
