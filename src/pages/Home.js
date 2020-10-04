import React from "react";
import CardPersonagem from "../components/CardPersonagem/CardPersonagem";
import CorpoMain from "../components/CorpoMain";
import HeaderMain from "../components/HeaderMain";
import ListaPersonagem from "../components/ListaPersonagem";
import MenuFiltro from "../components/MenuFiltro";
import SwitchOpacao from "../components/SwitchOpcao";

function Home() {
  const teste = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  return (
    <>
      <HeaderMain></HeaderMain>
      <CorpoMain personagens={teste} />

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
