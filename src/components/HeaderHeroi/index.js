import React from "react";
import Busca from "../Busca";

function HeaderHeroi() {
  return (
    <header
      style={{
        width: "100%",
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <img
        src="./imagens/Logo/Group4@3x.png"
        style={{ width: "250px", height: '80px' }}
      />
      <div style={{ display: "flex", flex: '0 0 82%' }}>
        <Busca segundoEstilo/>
      </div>
    </header>
  );
}

export default HeaderHeroi;
