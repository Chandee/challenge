import React from "react";
import HeaderHeroi from "../components/HeaderHeroi";

function Home() {
  return (
    <>
      <div style={{
          padding: '40px 80px 0px 80px',
      }}>
        <HeaderHeroi></HeaderHeroi>
        <InformacaoHeroi/>
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
