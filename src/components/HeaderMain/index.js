import React from "react";
import Busca from "../Busca";

function HeaderMain({setTodosHerois}) {
  return (
    <header
      style={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <img
        src="./imagens/Logo/Group@3x.png"
        style={{ width: "300px", marginTop: "30px" }}
        alt="marvel"
      />
      <h1>EXPLORE O UNIVERSO</h1>
      <p>
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve
      </p>
      <div style={{ display: "flex", placeContent: "center", margin: "50px" }}>
        <Busca setTodosHerois={setTodosHerois} />
      </div>
    </header>
  );
}

export default HeaderMain;
