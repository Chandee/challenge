import React from "react";
import { NomePersonagem, WrapperCoracao } from "../CardPersonagem/style";
import Coracao from "../Coracao";

function NomeComFavorito({ nome }) {
  return (
    <>
      <NomePersonagem> {nome}</NomePersonagem>
      <WrapperCoracao>
        <Coracao />
      </WrapperCoracao>
    </>
  );
}

export default NomeComFavorito;
