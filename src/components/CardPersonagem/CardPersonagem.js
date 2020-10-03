import React from "react";
import {
  ImagemPersonagem,
  LinhaVermelha,
  NomePersonagem,
  WrapperBottom,
  WrapperCardPersonagem,
  WrapperCoracao,
} from "./style";
import Coracao from "../Coracao";

function CardPersonagem({ onClick, nome }) {
  return (
    <WrapperCardPersonagem>
      <ImagemPersonagem
        src={"http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg"}
        alt={`personagem ${nome}`}
        onClick={onClick}
      />
      <LinhaVermelha />
      <WrapperBottom>
        <NomePersonagem> {nome}</NomePersonagem>
        <WrapperCoracao>
          <Coracao />
        </WrapperCoracao>
      </WrapperBottom>
    </WrapperCardPersonagem>
  );
}

export default CardPersonagem;
