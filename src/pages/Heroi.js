import React from "react";
import HeaderHeroi from "../components/HeaderHeroi";
import InfoQuadrinhos from "../components/InfoQuadrinhos";
import InformacaoHeroi from "../components/InformacaoHeroi";

function Home() {
  return (
    <>
      <div
        style={{
          padding: "40px 80px 0px 80px",
        }}
      >
        <HeaderHeroi></HeaderHeroi>
        <InformacaoHeroi
          descricao={
            "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets."
          }
          nome={"hulk"}
        />
        <InfoQuadrinhos/>
      </div>

      <footer
        style={{
          background: "red",
          width: "100%",
          height: "80px",
          position: "absolute",
          bottom: 0,
        }}
      ></footer>
    </>
  );
}

export default Home;
