import React from "react";
import { NomePersonagem, WrapperCoracao } from "../CardPersonagem/style";
import Coracao from "../Coracao";

function NomeComFavorito({ nome, tamanho = 1 }) {
  return (
    <>
      <NomePersonagem tamanho={tamanho}> {nome}</NomePersonagem>
      <WrapperCoracao>
        <Coracao tamanho={tamanho}/>
      </WrapperCoracao>
    </>
  );
}

export default NomeComFavorito;
