import React from "react";

function ComicHeroi({ titulo, imagem }) {
  return (
    <div
      style={{
        margin: "80px 40px 10px 40px",
      }}
    >
      <img
        style={{
          height: "250px",
          width: "180px",
          marginBottom: "20px",
        }}
        src={imagem}
      />
      <span
        style={{
          display: "block",
          fontWeight: "bold",   
          maxWidth: "180px"
        }}
      >
        {titulo}
      </span>
    </div>
  );
}

export default ComicHeroi;
