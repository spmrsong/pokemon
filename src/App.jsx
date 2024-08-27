import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import PokemonDetail from "./components/PokemonDetail";

export const PokemonContext = createContext();

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  return (
    <PokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dex" element={<Dex />} />
          <Route path="/pokemon-detail" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </PokemonContext.Provider>
  );
}

export default App;
