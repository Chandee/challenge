import React, { useEffect, useState } from "react";
import { resgataQuadrinho } from "../../service/Endpoint";
import ComicHeroi from "../ComicHeroi";
import { WrapperListaQuadrinho, WrapperQuadrinho } from "./style";

function InfoQuadrinhos({ quadrinhos = []}) {
  const teste = ["", "", "", "", "", "", "", "", "", ""];


  return (
    <WrapperQuadrinho>
      <h2>Ultimos lançamentos</h2>
      <WrapperListaQuadrinho>
        {quadrinhos.map((item) => {
          return (
            <ComicHeroi
              imagem={item.thumbnail.path + "." + item.thumbnail.extension}
              titulo={item.title}
            />
          );
        })}
      </WrapperListaQuadrinho>
    </WrapperQuadrinho>
  );
}

export default InfoQuadrinhos;
