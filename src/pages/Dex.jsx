import React, { useContext } from "react";
import MOCK_DATA from "../mock";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { PokemonContext } from "../App";
import { useNavigate } from "react-router-dom";

function Dex() {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);
  const navigate = useNavigate();

  const addPokemon = (pokemon) => {
    if (!selectedPokemon.some((p) => p.id === pokemon.id)) {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    }
  };

  const removePokemon = (pokemonId) => {
    const updatedPokemonList = selectedPokemon.filter(
      (pokemon) => pokemon.id !== pokemonId
    );
    setSelectedPokemon(updatedPokemonList);
  };

  const pokemonDetail = (id) => {
    navigate(`/pokemon-detail/${id}`);
  };

  return (
    <div>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList
        pokemonList={MOCK_DATA}
        onAddPokemon={addPokemon}
        onCardClick={pokemonDetail}
      />
    </div>
  );
}

export default Dex;
