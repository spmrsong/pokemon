import React, { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../App";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(248, 248, 248);
  margin-bottom: 20px;
  border-radius: 10px;
`;

const AddContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
`;

const CardContainer = styled.div`
  width: 110px;
  background-color: rgb(255, 255, 255);
  border: 2px dashed rgb(204, 204, 204);
  display: flex;
  justify-content: center;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
`;

const Dashboard = () => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);

  const removePokemon = (pokemonId) => {
    const updatedPokemonList = selectedPokemon.filter(
      (pokemon) => pokemon.id !== pokemonId
    );
    setSelectedPokemon(updatedPokemonList);
  };

  return (
    <DashboardContainer>
      <h2>나만의 포켓몬</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <ul>
          <AddContainer>
            {selectedPokemon.map((pokemon) => (
              <CardContainer key={pokemon.id}>
                <div>
                  <img src={pokemon.img_url} alt={pokemon.korean_name} />
                  <p>{pokemon.korean_name}</p>
                  <p>No.{pokemon.id}</p>
                  <button onClick={() => removePokemon(pokemon.id)}>
                    삭제
                  </button>
                </div>
              </CardContainer>
            ))}
          </AddContainer>
        </ul>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
