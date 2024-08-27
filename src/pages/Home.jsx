// Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const container = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
  };

  const imgSize = {
    width: "600px",
    marginBottom: "20px",
  };

  return (
    <div style={container}>
      <img
        style={imgSize}
        src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png"
        alt="Pokemon Logo"
      />
      <button onClick={() => navigate("/Dex")}>포켓몬 도감 시작하기</button>
    </div>
  );
};

export default Home;
