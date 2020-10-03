import React from "react";
import CardPersonagem from "../components/CardPersonagem/CardPersonagem";
import HeaderMain from "../components/HeaderMain";
import ListaPersonagem from "../components/ListaPersonagem";

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
      <section
        style={{
          background: "yellow",
          width: "100%",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", bottom: 0 }}>teste</div>
        <ListaPersonagem lista={teste} />
        corpo ground
      </section>
      <footer
        style={{
          background: "red",
          width: "100%",
          height: "100px",
          position: "absolute",
          bottom: 0,
        }}
      >
        footer
      </footer>
    </>
  );
}

export default Home;
