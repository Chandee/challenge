import React from "react";
import CardPersonagem from "../components/CardPersonagem/CardPersonagem";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header></Header>
      <section
        style={{
          background: "yellow",
          width: "100%",
          height: "200px",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", bottom: 0 }}>teste</div>
        <CardPersonagem nome={"Hulk"} />
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
