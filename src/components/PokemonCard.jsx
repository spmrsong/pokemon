// PokemonCard.jsx
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 5px;
`;

function PokemonCard({ pokemon, onAdd, onRemove, isSelected, onClick }) {
  return (
    <Card onClick={onClick}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>{pokemon.korean_name}</p>
      <p>No.{pokemon.id}</p>
      {isSelected ? (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(pokemon.id);
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onAdd(pokemon);
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;
