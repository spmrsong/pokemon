// PokemonList.jsx
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
`;

const PokemonList = ({
  pokemonList,
  onAddPokemon,
  onCardClick,
  isSelected,
}) => {
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={() => onAddPokemon(pokemon)}
          onClick={() => onCardClick(pokemon.id)}
          isSelected={isSelected ? isSelected(pokemon) : false}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
