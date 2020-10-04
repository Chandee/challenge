import React from "react";
import ComicHeroi from "../ComicHeroi";
import { WrapperListaQuadrinho, WrapperQuadrinho } from "./style";

function InfoQuadrinhos() {
  const teste = ["", "", "", "", "", "", "", "", "", ""];
  return (
    <WrapperQuadrinho>
      <h2>Ultimos lançamentos</h2>
      <WrapperListaQuadrinho>
        {teste.map(() => {
          return (
            <ComicHeroi
              imagem="http://i.annihil.us/u/prod/marvel/i/mg/b/d0/4badb223f33c9.jpg"
              titulo="quadrinho hulk"
            />
          );
        })}
      </WrapperListaQuadrinho>
    </WrapperQuadrinho>
  );
}

export default InfoQuadrinhos;
