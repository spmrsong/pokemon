// PokemonDetail.jsx
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const DetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 250px;
`;

function PokemonDetail() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pokemonId = parseInt(params.get("id"), 10);
  const pokemon = MOCK_DATA.find((p) => p.id === pokemonId);

  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <DetailStyle>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <h2>{pokemon.korean_name}</h2>
        <p>타입: {pokemon.types.join(", ")}</p>
        <p>{pokemon.description}</p>
        <button onClick={() => window.history.back()}>뒤로 가기</button>
      </DetailStyle>
    </div>
  );
}

export default PokemonDetail;
